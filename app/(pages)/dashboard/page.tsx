import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DataPage from "@/components/dashboard/DataPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Tracker | Dashboard",
  description:
    "Simple full stack application to keep track of the jobs you found interesting in simple dashboard, kind of like bookmarks.",
};

const DashBoard = () => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  return (
    <div className="mt-10">
      {isAuthenticated() ? <DataPage userId={getUser().id!} /> : <></>}
    </div>
  );
};

export default DashBoard;
