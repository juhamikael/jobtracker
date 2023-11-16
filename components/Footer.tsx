"use client";
import { cn } from "@/lib/utils";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className="mt-auto">
      <div className="flex justify-center md:fixed md:bottom-0 md:right-0 md:py-4 md:zpx-4">
        <div className="flex gap-x-4">
          <Link
            className="flex gap-x-2 hover:font-bold transition-all"
            href="https://github.com/juhamikael/jobtracker"
            target="_blank"
          >
            <AiFillGithub className="h-6 w-6" />
            Source code
          </Link>
          <Link
            className="flex gap-x-2 hover:font-bold transition-all"
            href="https://dev.juhamikael.info/contact"
            target="_blank"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex justify-center gap-x-4 py-4">
        <Link
          className={cn(
            "hover:font-bold transition-all",
            pathName === "/terms" && "font-bold text-primary"
          )}
          href="/terms"
        >
          Terms of Service
        </Link>
        <Link
          className={cn(
            "hover:font-bold transition-all",
            pathName === "/privacy-policy" && "font-bold text-primary"
          )}
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
