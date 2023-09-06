import { FC } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DataPage from "@/components/dashboard/DataPage";
type TDashBoardProps = {
  prop?: string;
  children?: React.ReactNode;
};

const DashBoard: FC<TDashBoardProps> = ({}) => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  return (
    <div className="mt-10">
      {isAuthenticated() ? (
        <DataPage userId={getUser().id!} />
      ) : (
        <div> Please Login </div>
      )}
    </div>
  );
};

export default DashBoard;
