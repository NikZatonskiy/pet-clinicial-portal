import Cell from "./Cell";

const Body = ({ rows }) => {
  const rowsLastIndex = rows.length - 1;

  return (
    <tbody>
      {rows.map((row, rowIndex) => {
        const visibleCells = row.getVisibleCells();
        const lastCellIndex = visibleCells.length - 1;

        return (
          <tr key={row.id} className="relative">
            {visibleCells.map((cell, cellIndex) => (
              <Cell
                key={cellIndex}
                cell={cell}
                isLastCell={cellIndex === lastCellIndex}
                isLastRow={rowIndex === rowsLastIndex}
              />
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Body;
