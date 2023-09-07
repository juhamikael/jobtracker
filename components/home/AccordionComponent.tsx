import { AiOutlineLink } from "react-icons/ai";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const AccordionComponent = () => {
  return (
    <Accordion type="single" collapsible className={cn("w-96")}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this app and why?</AccordionTrigger>
        <AccordionContent>
          <p>
            This app serves as a centralized hub for users to track job
            opportunities they find interesting, consolidating essential
            metadata in one place.
          </p>
          <p className="my-4">
            Users can edit the data of any job posting {"'bookmark'"},
            especially if errors were made during the initial addition. This
            includes updating the
            {"'Applied'"} status and making other necessary corrections. Jobs
            can also be removed if they are no longer relevant.
          </p>
          <Link
            className="hover:text-blue-300 font-bold"
            href="/dashboard"
            target="_self"
          >
            Navigate to the dashboard
          </Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Built with</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Frontend</span>
              <ul className="ml-6 list-disc list-inside">
                <li>Next.js</li>
                <li>
                  Tailwind CSS
                  <li className="ml-6">shadcn/ui</li>
                </li>
              </ul>
            </li>

            <li className="mt-3">
              <span className="font-bold">Backend</span>
              <ul className="ml-6 list-disc list-inside">
                <li>Drizzle ORM</li>
                <li>Supabase</li>
                <li>PostgreSQL</li>
                <li>Kinde Auth</li>
              </ul>
            </li>
            <li className="mt-3">
              <span className="font-bold">Language</span>
              <ul className="ml-6 list-disc list-inside">
                <li>Typescript</li>
              </ul>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Privacy</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">
            This site collects your email, name, and profile picture from Google
            and GitHub solely for identification purposes, enabling you to use
            the app. We don't request or store user passwords; authentication is
            managed via a code sent to your email or through GitHub.
          </p>

          <p className="mb-2">
            Your trust is valued. While we don't spam or sell your data, it's
            important to note that third-party services used for database and
            authentication may have their own security measures. We can't
            guarantee their absolute security.
          </p>

          <p className="flex flex-col gap-y-3">
            <Link
              target="_blank"
              className="hover:text-blue-300 font-bold"
              href="/privacy-policy"
            >
              <AiOutlineLink className="inline-block mr-2" />
              View complete Privacy Policy
            </Link>
            <Link
              target="_blank"
              className="hover:text-blue-300 font-bold"
              href="/terms"
            >
              <AiOutlineLink className="inline-block mr-2" />
              View Terms of Service
            </Link>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Contact</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">
            This platform is primarily designed for personal use and as a
            showcase for my portfolio.
          </p>
          <p className="mb-2">
            If you wish to have your data removed, have any questions, feedback,
            or other concerns:
          </p>
          <Link
            target="_blank"
            className="hover:text-blue-300 font-bold"
            href="https://dev.juhamikael.info/contact"
          >
            <AiOutlineLink className="inline-block mr-2" />
            Please contact me through the form on my personal website.
          </Link>
          <p className="mt-2 italic">
            (Ensure you use the same email you registered with on this app.)
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
