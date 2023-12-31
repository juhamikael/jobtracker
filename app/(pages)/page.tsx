import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AccordionComponent from "@/components/home/AccordionComponent";
import { redirect } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Tracker",
  description:
    "Simple full stack application to keep track of the jobs you found interesting in simple dashboard, kind of like bookmarks.",
};

export default function Home() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <div className="flex flex-col">
      {!isAuthenticated() && (
        <div className="lg:mt-20">
          <div className=" flex flex-col gap-x-4">
            <div className="text-6xl font-black mb-20">
              <h1>Job Tracker</h1>
            </div>
            <div className="flex gap-x-4 justify-around mb-5">
              <LoginLink className="w-full items-center flex justify-center bg-primary text-muted rounded-lg text-sm hover:bg-primary/90 py-2.5">
                Sign in
              </LoginLink>
              <RegisterLink className="w-full items-center flex justify-center bg-primary text-muted rounded-lg text-sm hover:bg-primary/90 py-2.5">
                Sign up
              </RegisterLink>
            </div>
            <AccordionComponent />
          </div>
        </div>
      )}
      {isAuthenticated() && redirect("/dashboard")}
    </div>
  );
}
