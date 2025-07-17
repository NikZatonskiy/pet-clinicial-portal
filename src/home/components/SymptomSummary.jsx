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

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <>
      <text>{name}</text>
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

function SymptomSummary() {
  const data = [
    { name: "Diarrhea", value: 37 },
    { name: "Heart palpitations", value: 25 },
    { name: "Muscle aches", value: 15 },
    { name: "Bruising", value: 13 },
    { name: "Fatigue", value: 10 },
  ]
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="home__main__symptom-summary p-6 bg-gray-100 border-1 border-gray-200 rounded-lg">
      <h2>Symptom Summary</h2>
      <div className="home__main__symptom-summary__graph h-[200px]">
        <ResponsiveContainer>
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
            >
              {/* {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))} */}
            </Pie>
            <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
            
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SymptomSummary;
