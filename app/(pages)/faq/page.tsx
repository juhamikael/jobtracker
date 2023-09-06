import AccordionComponent from "@/components/home/AccordionComponent";

const FAQ = () => {
  return (
    <div className="flex flex-col">
      <div className="lg:mt-20">
        <div className=" flex flex-col gap-x-4">
          <div className="text-6xl font-black mb-10">
            <h1>Job Tracker</h1>
          </div>

          <AccordionComponent />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
