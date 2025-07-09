import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const RoundedBar = (props) => {
  const { fill, x, y, width, height, index } = props;
  const radius = 3;
  return (
    <path
      d={`
        M${x},${y + radius}
        Q${x},${y} ${x + radius},${y}
        L${x + width - radius},${y}
        Q${x + width},${y} ${x + width},${y + radius}
        L${x + width},${y + height - radius}
        Q${x + width},${y + height} ${x + width - radius},${y + height}
        L${index === 0 ? x + radius : x},${y + height}
        Q${index === 0 ? x : x},${y + height} ${index === 0 ? x : x},${
        y + height - radius
      }
        L${index === 0 ? x : x},${y + radius}
        Q${index === 0 ? x : x},${y} ${index === 0 ? x + radius : x},${y}
        Z
      `}
      fill={fill}
    />
  );
};

const CustomLegend = ({ payload }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "16px",
      marginTop: "8px",
    }}
  >
    {payload.map((entry, i) => (
      <div key={`item-${i}`} style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "inline-block",
            width: 10,
            height: 10,
            backgroundColor: entry.color,
            marginRight: 8,
            borderRadius: 2,
          }}
        />
        - {entry.value}
      </div>
    ))}
  </div>
);

function Medication() {
  const data = [
    {
      name: "Medication",
      Ibrutinib: 40,
      Acalabrutinib: 37,
      Zanubrutinib: 13,
      Other: 10,
    },
  ];

  const COLORS = ["#5A6ACF", "#8593ED", "#C7CEFF", "#EEEFF5"];

  return (
    <div
      className="p-6"
      style={{
        // padding: "16px",
        backgroundColor: "#f3f4f6",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Заголовок слева */}
        <h3
          // className="pl-2"
          style={{
            margin: "0 16px 0 0",
            fontWeight: "bold",
            minWidth: "80px",
          }}
        >
          Medication
        </h3>

        {/* График */}
        <div style={{ flex: 1, height: "60px" }}>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart
              layout="vertical"
              data={data}
              stackOffset="expand"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              barSize={12}
            >
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" hide />
              <Bar
                dataKey="Ibrutinib"
                stackId="a"
                fill={COLORS[0]}
                name="Ibrutinib 40%"
                shape={<RoundedBar />}
              />
              <Bar
                dataKey="Acalabrutinib"
                stackId="a"
                fill={COLORS[1]}
                name="Acalabrutinib 37%"
                shape={<RoundedBar />}
              />
              <Bar
                dataKey="Zanubrutinib"
                stackId="a"
                fill={COLORS[2]}
                name="Zanubrutinib 13%"
                shape={<RoundedBar />}
              />
              <Bar
                dataKey="Other"
                stackId="a"
                fill={COLORS[3]}
                name="Other 10%"
                shape={<RoundedBar />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <CustomLegend
        payload={[
          { value: "Ibrutinib 40%", color: COLORS[0] },
          { value: "Acalabrutinib 37%", color: COLORS[1] },
          { value: "Zanubrutinib 13%", color: COLORS[2] },
          { value: "Other 10%", color: COLORS[3] },
        ]}
      />
    </div>
  );
}

export default Medication;
