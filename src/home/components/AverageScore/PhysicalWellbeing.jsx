import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  PieChart,
  Pie,
  Text,
  Label,
} from "recharts";

function PhysicalWellbeing() {
  const score = 7.1;
  const maxScore = 10;
  const data = [
    { name: "Score", value: score, color: "#FF5492" },
    { name: "Remaining", value: maxScore - score, color: "#f3f4f6" },
  ];

  return (
    <div className="home__main__averages-score__physical-wellbeing flex bg-gray-100 border-1 border-gray-200 rounded-lg justify-between">
      <div className="flex p-6 gap-8">
        <img
          alt="patients icon"
          src="/pet-clinicial-portal/dist/assets/physical_wellbeing_icon.png"
          className="w-12 h-12"
        />
        <div>
          <h2 className="text-lg font-semibold">Physical Wellbeing</h2>
          <p>17 patients reported</p>
        </div>
      </div>
      <div className="home__main__averages-score__physical-wellbeing__graph w-[40%] flex items-center pr-8">
        <ResponsiveContainer width="60%" height="100%">
          <PieChart className="p-1">
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={36}
              outerRadius={42}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Label
              value={score}
              position="center"
              fontSize={24}
              fill="#333"
              fontWeight="bold"
            />
          </PieChart>
        </ResponsiveContainer>
        <span className="whitespace-nowrap">Average score</span>
      </div>
    </div>
  );
}

export default PhysicalWellbeing;
