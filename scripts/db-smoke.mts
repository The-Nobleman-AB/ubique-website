import { prisma } from "../lib/db";

const counts = {
  jobs: await prisma.job.count(),
  applications: await prisma.application.count(),
  admins: await prisma.adminUser.count(),
};

console.log("DB reachable:", counts);
await prisma.$disconnect();
