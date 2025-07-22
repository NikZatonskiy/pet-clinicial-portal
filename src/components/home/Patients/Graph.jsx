import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { totalNumber } from "./consts";

const RoundedBar = ({ x, y, width, height, fill }) => {
  const radius = 3;

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

function Graph({ data }) {
  console.log(data);
  return (
    <div className="w-full h-full relative">
      <ResponsiveContainer
        className="absolute bottom-0"
        width="100%"
        height="70%"
      >
        <BarChart width={300} height={250} data={data}>
          <XAxis dataKey="name" stroke="none" />
          <YAxis
            type="number"
            domain={[0, 100]}
            unit="%"
            tickCount={3}
            tickLine={false}
            axisLine={false}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
          <Bar
            dataKey={(entry) => ((entry.value / totalNumber) * 100).toFixed(0)}
            fill="#8884d8"
            barSize={80}
            shape={<RoundedBar />}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
