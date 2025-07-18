import {
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
    <ResponsiveContainer height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Pie
          data={[{ value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={90}
          fill="white"
          labelLine={false}
          stroke="none"
        />
        <Pie
          data={[{ value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={105}
          fill="white"
          labelLine={false}
          stroke="none"
        />
        <Pie
          data={[{ value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius={115}
          outerRadius={120}
          fill="white"
          labelLine={false}
          stroke="none"
        />
        <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default SymptomSummaryGraph;