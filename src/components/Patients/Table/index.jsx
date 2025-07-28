import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import Body from "./Body";
import { data } from "./consts";
import Head from "./Head";
import getColumns from "./Columns";

const MedicalTable = () => {
  const [sorting, setSorting] = useState([
    {
      id: "name",
      desc: true,
    },
  ]);

  const columns = getColumns();
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const headerGroups = table.getHeaderGroups();
  const rows = table.getRowModel().rows;

  return (
    <div className="w-full p-6">
      <table className="border-separate border-spacing-0 rounded-t-[12px] overflow-hidden border border-gray-200 w-full">
        <Head headerGroups={headerGroups} />
        <Body rows={rows} />
      </table>
    </div>
  );
};

export default MedicalTable;
