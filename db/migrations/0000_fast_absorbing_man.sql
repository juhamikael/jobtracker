CREATE TABLE IF NOT EXISTS "jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"href" varchar(512),
	"title" varchar(256),
	"company" varchar(256),
	"published_at" date,
	"ends_at" date,
	"apply_status" boolean,
	"user_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" varchar(256),
	"email" varchar(256),
	"name" varchar(256),
	"role" varchar(256),
	"last_login" date,
	"is_logged" boolean,
	CONSTRAINT "users_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "jobs" ADD CONSTRAINT "jobs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
