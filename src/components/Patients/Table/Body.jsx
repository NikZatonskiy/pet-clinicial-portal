import { flexRender } from "@tanstack/react-table";

function Body({ table }) {
  const rows = table.getRowModel().rows;
  const rowsLastIndex = rows.length - 1;

  return (
    <tbody>
      {rows.map((row, rowIndex) => {
        const isLastRow = rowIndex === rowsLastIndex;
        const visibleCells = row.getVisibleCells();
        const lastCellIndex = visibleCells.length - 1;

        return (
          <tr key={row.id} className="relative">
            {visibleCells.map((cell, cellIndex) => {
              const isLastCell = cellIndex === lastCellIndex;

              const baseClass = "p-[16px]";
              const borderClass = isLastRow
                ? isLastCell
                  ? ""
                  : "border-r border-gray-200"
                : isLastCell
                ? "border-b border-gray-200"
                : "border-b border-r border-gray-200";

              const adherenceClass =
                cell.column.id === "physicalWellbeing" ||
                cell.column.id === "mood" ||
                cell.column.id === "medicationAdherence" ||
                cell.column.id === "viewDetails"
                  ? "align-center"
                  : "align-top";

              return (
                <td
                  key={cell.id}
                  className={`${baseClass} ${borderClass} ${adherenceClass}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default Body;
