import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { jobs, users } from "./schema";
import { eq } from "drizzle-orm";
const dbUrl = process.env.DATABASE_URL!;

const client = postgres(dbUrl);
const db = drizzle(client);

export const allJobsById = async ({ id }: { id: number }) => {
  return await db.select().from(jobs).where(eq(jobs.userId, id));
};

export const postNewJob = async ({
  params,
}: {
  params: {
    title: string;
    company: string;
    publishedAt: string;
    endsAt: string;
    applyStatus: boolean;
    href: string;
    userId: number;
  };
}) => {
  return db.insert(jobs).values(params).returning();
};

export const updateApplyStatus = async ({
  id,
  applyStatus,
}: {
  id: number;
  applyStatus: boolean;
}) => {
  return await db
    .update(jobs)
    .set({ applyStatus: applyStatus })
    .where(eq(jobs.id, id));
};

export const updateTitle = async ({
  id,
  title,
}: {
  id: number;
  title: string;
}) => {
  return await db.update(jobs).set({ title: title }).where(eq(jobs.id, id));
};

export const updateHref = async ({
  id,
  href,
}: {
  id: number;
  href: string;
}) => {
  return await db.update(jobs).set({ href: href }).where(eq(jobs.id, id));
};

export const updateCompany = async ({
  id,
  company,
}: {
  id: number;
  company: string;
}) => {
  return await db.update(jobs).set({ company: company }).where(eq(jobs.id, id));
};

export const updatePublishedAt = async ({
  id,
  publishedAt,
}: {
  id: number;
  publishedAt: string;
}) => {
  return await db
    .update(jobs)
    .set({ publishedAt: publishedAt })
    .where(eq(jobs.id, id));
};

export const updateEndsAt = async ({
  id,
  endsAt,
}: {
  id: number;
  endsAt: string;
}) => {
  return await db.update(jobs).set({ endsAt: endsAt }).where(eq(jobs.id, id));
};

export const deleteJob = async ({ id }: { id: number }) => {
  return await db.delete(jobs).where(eq(jobs.id, id));
};

export const getUser = async ({
  userId,
  email,
  name,
  role,
}: {
  userId: string;
  email: string;
  name: string;
  role: string;
}) => {
  const user = await db.select().from(users).where(eq(users.userId, userId));
  if (user.length > 0) {
    console.log("User exists");
    return user;
  }

  return await db
    .insert(users)
    .values({ userId: userId, email: email, name: name, role: role })
    .returning();
};

export const getUserById = async ({ userId }: { userId: string }) => {
  return await db.select().from(users).where(eq(users.userId, userId));
};
