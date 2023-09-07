"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className="mt-auto">
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
