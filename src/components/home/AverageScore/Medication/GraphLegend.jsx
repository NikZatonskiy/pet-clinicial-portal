function GraphLegend({ payload }) {
  return (
    <div className="flex justify-between flex-wrap pt-3">
      {payload.map((entry, i) => (
        <div className="flex items-center" key={`item-${i}`}>
          <span
            className="inline-block w-[10px] h-[10px] mr-2 rounded-md"
            style={{ backgroundColor: entry.color }}
          />
          {entry.value}
        </div>
      ))}
    </div>
  );
}

export default GraphLegend;
