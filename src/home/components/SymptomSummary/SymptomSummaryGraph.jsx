import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip
} from "recharts";

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const RADIAN = Math.PI / 180;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <>
      {/* <text>{name}</text> */}
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

function SymptomSummaryGraph({ data, colors }) {
  return(
    <ResponsiveContainer height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          // label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          label={renderCustomizedLabel}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
        
      </PieChart>
    </ResponsiveContainer>
  )
}

export default SymptomSummaryGraph;