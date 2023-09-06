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
            Simply to keep track of the jobs you found interesting by adding the
            base metadata of it and want to keep everything in one place.
          </p>
          <p className="my-4">
            {
              "You can edit the Applied status of a job, change the data if mistakes were made when creating the record or delete the job if you don't want to see it anymore."
            }
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
        <AccordionTrigger>Contact</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">
            Since this is mainly for a personal purpose and for portfolio.
          </p>
          <p className="mb-2">
            So if you want to get your data removed or have any questions
          </p>

          <Link
            target="_blank"
            className="hover:text-blue-300 font-bold"
            href="https://dev.juhamikael.info/contact"
          >
            <AiOutlineLink className="inline-block mr-2" />
            Contact me through the contact form on my personal website (link)
          </Link>

          <p className="mt-2 italic">
            (Use the same email you used to register to this app.)
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
