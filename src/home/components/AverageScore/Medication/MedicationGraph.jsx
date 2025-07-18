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

function MedicationGraph({ data, colors }) {
  return(
    <div className="flex-1 h-[30px]">
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
            fill={colors[0]}
            name="Ibrutinib 40%"
            shape={<RoundedBar />}
          />
          <Bar
            dataKey="Acalabrutinib"
            stackId="a"
            fill={colors[1]}
            name="Acalabrutinib 37%"
            shape={<RoundedBar />}
          />
          <Bar
            dataKey="Zanubrutinib"
            stackId="a"
            fill={colors[2]}
            name="Zanubrutinib 13%"
            shape={<RoundedBar />}
          />
          <Bar
            dataKey="Other"
            stackId="a"
            fill={colors[3]}
            name="Other 10%"
            shape={<RoundedBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MedicationGraph;