"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavbarAuthenticated = () => {
  const pathName = usePathname();

  return (
    <div className="flex gap-x-4 mx-6">
      <Link
        className={cn(
          "hover:font-bold transition-all",
          pathName === "/dashboard" && "font-bold text-primary"
        )}
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={cn(
          "hover:font-bold transition-all",
          pathName === "/faq" && "font-bold text-primary"
        )}
        href="/faq"
      >
        FAQ
      </Link>{" "}
    </div>
  );
};

export default NavbarAuthenticated;
