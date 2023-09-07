import AccordionComponent from "@/components/home/AccordionComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Tracker | FAQ",
  description:
    "Simple full stack application to keep track of the jobs you found interesting in simple dashboard, kind of like bookmarks.",
};

const FAQ = () => {
  return (
    <div className="flex flex-col">
      <div className="lg:mt-20">
        <div className=" flex flex-col gap-x-4">
          <div className="text-8xl font-black mb-10 text-primary">
            <h1>FAQ</h1>
          </div>
          <AccordionComponent />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
