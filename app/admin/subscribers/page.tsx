import { Download } from "lucide-react";

import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { EmptyState, Panel, formatDate } from "@/components/admin/ui";

export const metadata = { title: "Subscribers" };
export const dynamic = "force-dynamic";

export default async function SubscribersPage() {
  await requireUser();

  const [subscribers, active] = await Promise.all([
    prisma.subscriber.findMany({ orderBy: { createdAt: "desc" }, take: 500 }),
    prisma.subscriber.count({ where: { unsubscribedAt: null } }),
  ]);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-3 text-navy font-bold">Subscribers</h1>
          <p className="text-muted mt-2">
            {active} active · {subscribers.length - active} unsubscribed
          </p>
        </div>

        {subscribers.length > 0 && (
          <a
            href="/admin/subscribers/export"
            className="rounded-control border-line text-navy hover:bg-surface inline-flex items-center gap-2 border px-5 py-3 font-semibold transition-colors"
          >
            <Download size={16} aria-hidden="true" />
            Export CSV
          </a>
        )}
      </div>

      <Panel className="mt-8">
        {subscribers.length === 0 ? (
          <EmptyState
            title="No subscribers yet"
            body="The signup form is in the site footer. Addresses collected there appear here."
          />
        ) : (
          <ul className="divide-line divide-y">
            {subscribers.map((subscriber) => (
              <li
                key={subscriber.id}
                className="flex flex-wrap items-center gap-4 px-6 py-4"
              >
                <span className="text-navy min-w-0 flex-1 truncate font-medium">
                  {subscriber.email}
                </span>

                <span className="text-muted text-sm">{subscriber.source}</span>

                {subscriber.unsubscribedAt ? (
                  <span className="rounded-pill bg-surface text-muted px-2.5 py-1 text-xs font-semibold uppercase">
                    unsubscribed
                  </span>
                ) : (
                  <span className="rounded-pill bg-accent-tint text-accent-dark px-2.5 py-1 text-xs font-semibold uppercase">
                    active
                  </span>
                )}

                <span className="text-muted w-24 text-right text-sm tabular-nums">
                  {formatDate(subscriber.createdAt)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </>
  );
}
