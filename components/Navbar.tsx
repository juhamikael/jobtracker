import { FC } from "react";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

import Image from "next/image";
import { Button } from "./ui/button";
type TNavbarProps = {
  prop?: string;
  children?: React.ReactNode;
};

const Navbar: FC<TNavbarProps> = ({}) => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();

  return (
    <nav className="flex justify-center gap-x-4 py-4 ">
      {isAuthenticated() && (
        <>
          <Link className="hover:font-bold transition-all" href="/dashboard">
            Dashboard
          </Link>
          <Link className="hover:font-bold transition-all" href="/faq">
            FAQ
          </Link>
        </>
      )}
      {isAuthenticated() ? (
        <div className="fixed right-0 mx-10 flex gap-x-4">
          <div>Logged in as {user.given_name}</div>
          <LogoutLink className="hover:font-bold transition-all">
            Logout
          </LogoutLink>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
