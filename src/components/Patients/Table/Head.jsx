import { flexRender } from "@tanstack/react-table";
import arrowDropDownIcon from "../../../assets/patients/arrow_drop_down_icon.svg";

function Head({ table }) {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="rounded-t-xl">
          {headerGroup.headers.map((header, index) => {
            const style =
              "bg-gray-100 pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-left border-b border-gray-200 font-normal text-gray-500 align-top";
            return (
              <th
                key={header.id}
                className={`${
                  index === headerGroup.headers.length - 1
                    ? style
                    : style + " border-r"
                }`}
                colSpan={header.colSpan}
                onClick={header.column.getToggleSortingHandler()}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}

export default Head;
