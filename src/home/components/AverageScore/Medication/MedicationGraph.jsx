import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const RoundedBar = ({ x, y, width, height, fill }) => {
  const radius = 4;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

function MedicationGraph({ data, colors }) {
  const barKeys = Object.keys(data[0]).filter(key => key !== 'name');

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
          {barKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={colors[index % colors.length]}
              name={`${key} ${data[0][key]}%`}
              shape={<RoundedBar />}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MedicationGraph;