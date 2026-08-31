/**
 * Link integrity check.
 *
 * Walks every internal href in the codebase and asserts it resolves to a real
 * route and, for anchors, to a real id. This is the check that would have
 * caught `/countries/apac` and the three dead `/services#...` anchors before
 * they shipped.
 *
 * Run with: npm run check:links
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();

/* ------------------------------------------------------------------ walk */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (
      entry === "node_modules" ||
      entry === ".next" ||
      entry.startsWith(".")
    ) {
      continue;
    }

    const full = join(dir, entry);

    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(tsx|ts)$/.test(entry)) out.push(full);
  }

  return out;
}

const files = [
  ...walk(join(ROOT, "app")),
  ...walk(join(ROOT, "components")),
  ...walk(join(ROOT, "data")),
];

/* --------------------------------------------------------------- routes */

const routes = new Set(["/"]);

for (const file of walk(join(ROOT, "app"))) {
  /* Route handlers (route.ts) are real URLs too — CSV exports, file
     downloads — so they count as routes for link checking. */
  if (!file.endsWith("page.tsx") && !file.endsWith("route.ts")) continue;

  /* Route groups — app/(site)/about → /about — don't appear in URLs. */
  const route = relative(join(ROOT, "app"), file)
    .replace(/\/?(page\.tsx|route\.ts)$/, "")
    .split("/")
    .filter((segment) => !/^\(.*\)$/.test(segment))
    .join("/");

  routes.add(route ? `/${route}` : "/");
}

const dynamicRoutes = [...routes].filter((route) => route.includes("["));

/* ------------------------------------------------------------------ ids */

const ids = new Set();

for (const file of files) {
  const source = readFileSync(file, "utf8");

  for (const match of source.matchAll(/\bid="([a-zA-Z0-9_-]+)"/g)) {
    ids.add(match[1]);
  }
}

/* Anchors rendered from data — `id={practice.slug}` on the practices page. */
const practiceSource = readFileSync(join(ROOT, "data/practices.ts"), "utf8");

for (const match of practiceSource.matchAll(/^\s{4}slug: "([a-z0-9-]+)",/gm)) {
  ids.add(match[1]);
}

/* Job slugs now live in the database, so read them from the seed file — the
   canonical list of what exists on a fresh install. Roles added through the
   admin get their own slugs and can't be checked statically. */
const seedSource = readFileSync(join(ROOT, "prisma/seed.mts"), "utf8");
const jobIds = [...seedSource.matchAll(/^\s{4}slug: "([a-z0-9-]+)",/gm)].map(
  (match) => match[1],
);

/* ---------------------------------------------------------------- check */

const problems = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const shortPath = relative(ROOT, file);

  for (const match of source.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1];
    /* Strip any query string before resolving the path. */
    const [withoutHash, hash] = href.split("#");
    const path = withoutHash.split("?")[0];
    const clean = path.length > 1 ? path.replace(/\/$/, "") : path;
    const line = source.slice(0, match.index).split("\n").length;

    if (clean && clean !== "/") {
      const resolves =
        routes.has(clean) ||
        jobIds.some((id) => clean === `/careers/${id}`) ||
        dynamicRoutes.some((route) =>
          new RegExp(`^${route.replace(/\[[^\]]+\]/g, "[^/]+")}$`).test(clean),
        );

      if (!resolves) {
        problems.push(`${shortPath}:${line}  dead route   ${href}`);
        continue;
      }
    }

    if (hash && !ids.has(hash)) {
      problems.push(`${shortPath}:${line}  dead anchor  ${href}`);
    }
  }
}

/* --------------------------------------------------------------- report */

if (problems.length > 0) {
  console.error(`\n✗ ${problems.length} broken internal link(s):\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  console.error("");
  process.exit(1);
}

console.log(
  `✓ every internal link resolves (${routes.size} routes, ${ids.size} anchors)`,
);
