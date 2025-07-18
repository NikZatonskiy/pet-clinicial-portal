function MedicationGraphCustomLegend({ payload }) {
  return(
    <div className="flex justify-between flex-wrap pt-[12px]">
      {payload.map((entry, i) => (
        <div key={`item-${i}`} style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              backgroundColor: entry.color,
              marginRight: 8,
              borderRadius: 6,
            }}
          />
          {entry.value}
        </div>
      ))}
    </div>
  )
}

export default MedicationGraphCustomLegend;