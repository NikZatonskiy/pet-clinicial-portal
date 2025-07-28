import { flexRender } from "@tanstack/react-table";

const Head = ({ headerGroups }) => (
  <thead>
    {headerGroups.map(({ id, headers }) => (
      <tr key={id} className="rounded-t-xl">
        {headers.map((header, index) => {
          const { id, colSpan, column } = header;
          const style =
            "bg-gray-100 pt-3 pb-3 pl-4 pr-4 text-left border-b border-gray-200 font-normal text-gray-500 align-top";

          return (
            <th
              key={id}
              className={`${
                index === headers.length - 1 ? style : style + " border-r"
              }`}
              colSpan={colSpan}
              onClick={column.getToggleSortingHandler()}
            >
              {flexRender(column.columnDef.header, header.getContext())}
            </th>
          );
        })}
      </tr>
    ))}
  </thead>
);

export default Head;
