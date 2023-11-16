import { FC } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { IoIosLogOut } from "react-icons/io";

import NavbarAuthenticated from "./NavbarAuthenticated";
type TNavbarProps = {
  prop?: string;
  children?: React.ReactNode;
};

const Navbar: FC<TNavbarProps> = ({}) => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();

  return (
    <nav className="flex justify-between md:justify-center gap-x-4 py-4 ">
      {isAuthenticated() ? (
        <>
          <NavbarAuthenticated />
          <div className="fixed right-0 mx-10 flex gap-x-4">
            <div className="hidden md:block fixed left-0 mx-10 text-green-400 font-bold">
              Logged in
            </div>
            <LogoutLink className="flex hover:font-bold transition-all items-center gap-x-2">
              <span className="hidden md:flex items-center">Logout</span>
              <IoIosLogOut className="my-1 mx-4 md:hidden" />
            </LogoutLink>
          </div>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
