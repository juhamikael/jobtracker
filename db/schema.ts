import { pgTable, serial, varchar, date, boolean } from "drizzle-orm/pg-core";

export const jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  href: varchar("href", { length: 512 }),
  title: varchar("title", { length: 256 }),
  company: varchar("company", { length: 256 }),
  publishedAt: date("published_at"),
  endsAt: date("ends_at"),
  applyStatus: boolean("apply_status"),
  userId: serial("user_id").references(() => users.id),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: varchar("userId", { length: 256 }).unique(),
  email: varchar("email", { length: 256 }),
  name: varchar("name", { length: 256 }),
  role: varchar("role", { length: 256 }),
  lastLogin: varchar("last_login"),
});
