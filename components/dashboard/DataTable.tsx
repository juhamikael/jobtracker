"use client";
import type { TDataType } from "@/types/dataType";
import { FC, useState } from "react";

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

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Link from "next/link";
import { BsCheckCircle, BsXCircleFill } from "react-icons/bs";
import axios from "axios";

type TDataTableProps = {
  tableData: TDataType[];
  setTableData: React.Dispatch<React.SetStateAction<TDataType[]>>;
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
  updateTable: boolean;
};

const DataTable: FC<TDataTableProps> = ({
  tableData,
  setTableData,
  setUpdateTable,
  updateTable,
}) => {
  const [editingRowId, setEditingRowId] = useState<number | null>(null);
  const [tempData, setTempData] = useState<TDataType | null>(null);

  const startEditing = (rowData: TDataType) => {
    setEditingRowId(rowData.id);
    setTempData(rowData);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof TDataType,
    id: number
  ) => {
    if (tempData) {
      axios.put("/api/jobs/", {
        [fieldName]: event.target.value,
        id: id,
        target: fieldName,
      });
      setTempData({
        ...tempData,
        [fieldName]: event.target.value,
      });
    }
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof TDataType,
    id: number
  ) => {
    if (tempData) {
      setTempData({
        ...tempData,
        [fieldName]: event.target.checked,
      });
      axios.put("/api/jobs/", {
        [fieldName]: event.target.checked,
        id: id,
        target: fieldName,
      });
    }
  };

  const handleDateChange = (fieldName: keyof TDataType) => (date?: Date) => {
    if (date && tempData) {
      setTempData({
        ...tempData,
        [fieldName]: date,
      });
    }
  };

  const saveChanges = (id: number) => {
    if (tempData) {
      const updatedData = tableData.map((row) =>
        row.id === id ? tempData : row
      );
      setTableData(updatedData);
    }
    setEditingRowId(null);
    setUpdateTable(!updateTable);
  };

  const deleteRow = (id: number) => {
    axios
      .delete("/api/jobs/", {
        data: {
          id: id,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const updatedData = tableData.filter((row) => row.id !== id);
          setTableData(updatedData);
          setUpdateTable(!updateTable);
        }
      })
      .catch((error) => {
        console.error("Error deleting the row:", error);
      });
  };

  return (
    <Table className={cn("w-screen")}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-96">Title</TableHead>
          <TableHead className="w-96 text-left">Company</TableHead>
          <TableHead className="text-left w-48">Published At</TableHead>
          <TableHead className="text-left w-48">Ends At</TableHead>
          <TableHead className="w-36">Link</TableHead>
          <TableHead className="text-center">Applied</TableHead>
          <TableHead>Edit</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData
          .sort((a, b) => a.id - b.id)
          .map((row) => (
            <TableRow key={row.id}>
              {editingRowId === row.id ? (
                <>
                  <TableCell>
                    <Input
                      className={cn("px-4 mx-0")}
                      value={tempData?.title || ""}
                      onChange={(e) => handleInputChange(e, "title", row.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      className={cn("mx-0 px-4")}
                      value={tempData?.company || ""}
                      onChange={(e) => handleInputChange(e, "company", row.id)}
                    />
                  </TableCell>
                  <TableCell className="text-start">
                    {format(new Date(row.publishedAt), "PPP")}
                  </TableCell>
                  <TableCell className="text-start">
                    {format(new Date(row.endsAt), "PPP")}
                  </TableCell>
                  <TableCell>
                    <Input
                      className={cn("px-4 mx-0 lg:w-52")}
                      value={tempData?.href || ""}
                      onChange={(e) => handleInputChange(e, "href", row.id)}
                    />
                  </TableCell>
                  <TableCell className="items-center">
                    <div>
                      <Input
                        className="h-6"
                        type="checkbox"
                        checked={tempData?.applyStatus || false}
                        onChange={(e) =>
                          handleCheckboxChange(e, "applyStatus", row.id)
                        }
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <button onClick={() => saveChanges(row.id)}>Save</button>
                  </TableCell>

                  <TableCell>
                    <button onClick={() => deleteRow(row.id)}>Delete</button>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell className="text-start">{row.title}</TableCell>
                  <TableCell className="text-start">{row.company}</TableCell>
                  <TableCell className="text-start">
                    {format(new Date(row.publishedAt), "PPP")}
                  </TableCell>
                  <TableCell className="text-start">
                    {format(new Date(row.endsAt), "PPP")}
                  </TableCell>
                  <TableCell className="font-bold">
                    <Link
                      className="hover:text-primary transition-all py-4"
                      target="_blank"
                      href={row.href}
                    >
                      View job post
                    </Link>
                  </TableCell>
                  <TableCell className="flex place-content-center my-2 ">
                    {row.applyStatus ? (
                      <BsCheckCircle className="text-green-500 h-6 w-6" />
                    ) : (
                      <BsXCircleFill className="text-primary h-6 w-6" />
                    )}
                  </TableCell>
                  <TableCell>
                    <button
                      className="py-3 hover:text-primary transition-all"
                      onClick={() => startEditing(row)}
                    >
                      Edit
                    </button>
                  </TableCell>
                  <TableCell>
                    <button
                      className="py-3 hover:text-primary transition-all"
                      onClick={() => deleteRow(row.id)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
