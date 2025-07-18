import { Cell, PieChart, Pie, Label } from "recharts";

function PatientResponseRateGraph({ data, reportedPercentage }) {
  return (
    <div className="flex flex-col items-center p-10">
      <PieChart width={160} height={160}>
        <Pie
          data={[{ value: 100 }]}
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#FFFFFF"
          labelLine={false}
        >
          <Label
            value={`${reportedPercentage}%`}
            position="center"
            fontSize={24}
            fill="#333"
            fontWeight="bold"
          />
        </Pie>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          dataKey="value"
          paddingAngle={0}
          startAngle={90}
          endAngle={-270}
          stroke="none"
          label={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
          ))}
        </Pie>
      </PieChart>
      <div className="flex gap-6 mt-2 text-sm pt-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#6960D7] mr-2"></div>
          <span>Reported</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#e5e7eb] mr-2"></div>
          <span>Not reported</span>
        </div>
      </div>
    </div>
  )
}

export default PatientResponseRateGraph;