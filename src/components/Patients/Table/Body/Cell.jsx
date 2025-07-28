import { flexRender } from "@tanstack/react-table";
import cn from "classnames";

const Cell = ({ cell, isLastCell, isLastRow }) => {
  const { id, column } = cell;
  const isDetailMetrics = [
    "physicalWellbeing",
    "mood",
    "medicationAdherence",
    "viewDetails",
  ].includes(column.id);

  const style = cn(
    "p-[16px] border-gray-200",
    { "border-b": !isLastRow },
    { "border-r": !isLastCell },
    { "align-center": isDetailMetrics },
    { "align-top": !isDetailMetrics }
  );

  return (
    <td key={id} className={style}>
      {flexRender(column.columnDef.cell, cell.getContext())}
    </td>
  );
};

export default Cell;
