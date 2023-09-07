"use client";

// Type imports
import type { TDataType } from "@/types/dataType";

// Other imports
import { FC, useEffect, useState } from "react";

import axios from "axios";

import ShowForm from "./Form";
import DataTable from "./DataTable";
import Loading from "../loading/Loading";

type TDataPageProps = {
  userId: string;
  prop?: string;
  children?: React.ReactNode;
};

const DataPage: FC<TDataPageProps> = ({ userId }) => {
  const [tableData, setTableData] = useState<TDataType[]>([]);
  const [user, setUser] = useState<any>(null);
  const [isTableDataLoading, setIsTableDataLoading] = useState<boolean>(true); // Loading state for table data
  const [updateTable, setSetUpdateTable] = useState<boolean>(false);

  useEffect(() => {
    const getKindeSession = async () => {
      const res = await fetch("/api/kindeSession");
      const data = await res.json();

      await axios.post("/api/users", {
        name: `${data.user.given_name} ${data.user.family_name}`,
        email: data.user.email,
        id: data.user.id,
        role: "basic-user",
      });

      await axios.get(`/api/users?id=${data.user.id}`).then((res) => {
        setUser(res.data.user[0]);
      });
    };

    getKindeSession();
  }, []);

  useEffect(() => {
    if (user) {
      axios.get(`/api/jobs?id=${user.id}`).then((res) => {
        if (JSON.stringify(res.data) !== JSON.stringify(tableData)) {
          setTableData(res.data);
        }
      });
    }
  }, [user, updateTable]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTableDataLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [tableData]);

  return (
    <>
      <section id="add-new-dialog">
        {isTableDataLoading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : (
          <>
            {tableData.length === 0 ? (
              <div className="flex justify-center">
                <ShowForm
                  tableDataEmpty={tableData.length === 0}
                  user={user}
                  updateTable={updateTable}
                  setUpdateTable={setSetUpdateTable}
                />
              </div>
            ) : (
              <>
                <div className="my-4 mx-12">
                  <ShowForm
                    user={user}
                    updateTable={updateTable}
                    setUpdateTable={setSetUpdateTable}
                  />
                </div>
                <DataTable
                  setUpdateTable={setSetUpdateTable}
                  updateTable={updateTable}
                  tableData={tableData}
                  setTableData={setTableData}
                />
              </>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default DataPage;
