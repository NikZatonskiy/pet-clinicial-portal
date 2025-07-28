import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import Body from "./Body";
import { data } from "./consts";
import Head from "./Head";
import getColumns from "./Columns";
import { useSelector, useDispatch } from "react-redux";
import { setSorting } from "@slices/tableSlice";

const MedicalTable = () => {
  const sorting = useSelector((state) => state.table.sorting);
  const dispatch = useDispatch();

  const columns = getColumns();
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: (updater) => {
      const newSorting =
        typeof updater === "function" ? updater(sorting) : updater;
      dispatch(setSorting(newSorting));
    },
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
