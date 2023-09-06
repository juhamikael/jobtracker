import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DataPage from "@/components/dashboard/DataPage";

const DashBoard = () => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  return (
    <div className="mt-10">
      {isAuthenticated() ? <DataPage userId={getUser().id!} /> : <></>}
    </div>
  );
};

export default DashBoard;
