// Shadcn/ui related imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addDays } from "date-fns";
import axios from "axios";
import { FC, useState } from "react";
import * as z from "zod";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Calendar } from "../ui/calendar";

interface ShowFormProps {
  user: any;
  updateTable: boolean;
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
  tableDataEmpty?: boolean;
}

const formSchema = z.object({
  title: z
    .string()
    .min(2)
    .max(200)
    .nonempty("Title is required and must be between 2 and 200 characters"),
  company: z
    .string()
    .min(2)
    .max(200)
    .nonempty("Company is required and must be between 2 and 200 characters"),
  publishDate: z.date().default(() => new Date()),
  endsAt: z.date().default(() => new Date()),
  href: z.string().url("Must be a valid URL"),
});

const ShowForm: FC<ShowFormProps> = ({
  user,
  updateTable,
  setUpdateTable,
  tableDataEmpty,
}) => {
  const [publishDate, setPublishDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      title: "",
      company: "",
      publishDate: publishDate?.from,
      endsAt: publishDate?.to,
      href: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    values.publishDate = publishDate?.from as Date;
    values.endsAt = publishDate?.to as Date;

    await axios.post("/api/jobs", {
      title: values.title,
      company: values.company,
      publishedAt: format(values.publishDate, "LLL dd, y"),
      endsAt: format(values.endsAt, "LLL dd, y"),
      href: values.href,
      applyStatus: false,
      userId: user.id,
    });
    setUpdateTable(!updateTable);
    form.reset();
  }
  console.log(tableDataEmpty);
  return (
    <>
      <Dialog>
        <DialogTrigger className="py-2 px-6 bg-primary rounded-2xl text-muted">
          Create new record
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="py-2 text-2xl font-bold">
              Add new record
            </DialogTitle>
            {tableDataEmpty && (
              <DialogDescription className="pb-4">
                If {"you're"} new user and you {"don't"} have any records saved
                yet, you most likely need to reload the page after adding new
                record. {"It's "}
                addressed bug {"I'm"} gonna work on later.
              </DialogDescription>
            )}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Junior Frontend Dev" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Google" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="publishDate"
                  render={({ field }) => (
                    <FormItem className={cn("flex flex-col")}>
                      <FormLabel>Published Date</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              id="date"
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !publishDate && "text-muted-foreground"
                              )}
                            >
                              <BsFillCalendarDateFill className="mr-2 h-4 w-4" />
                              {publishDate?.from ? (
                                publishDate.to ? (
                                  <>
                                    {format(publishDate.from, "LLL dd, y")} -{" "}
                                    {format(publishDate.to, "LLL dd, y")}
                                  </>
                                ) : (
                                  format(publishDate.from, "LLL dd, y")
                                )
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              defaultMonth={publishDate?.from}
                              selected={publishDate}
                              onSelect={setPublishDate}
                              numberOfMonths={2}
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="href"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link to job post</FormLabel>
                      <FormControl>
                        <Input placeholder="https://....." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShowForm;
