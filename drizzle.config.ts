import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dbCredentials: {
    connectionString:
      "postgresql://postgres:PvEUju7RFypxR6qo@db.hwzhuedbjfpyctluszsh.supabase.co:5432/postgres",
  },
  breakpoints: true,
  driver: "pg",
} satisfies Config;
