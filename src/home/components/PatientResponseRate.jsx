import { Cell, PieChart, Pie, Label } from "recharts";

function PatientResponseRate() {
  const data = [
    { name: "Reported", value: 85, color: "#6960D7" },
    { name: "Not reported", value: 15, color: "#e5e7eb" },
  ];

  const totalPatients = 20;
  const reportedPatients = 17;
  const reportedPercentage = Math.round((reportedPatients / totalPatients) * 100);

  return (
    <div className="home__main__patient-response-rate flex p-6 bg-gray-100 border-1 border-gray-200 rounded-lg justify-between">
      <div className="flex flex-col justify-between w-[40%]">
        <div className="">
          <h2 className="text-lg font-semibold">Patient Response Rate</h2>
          <p className="text-sm">
            This statistic shows the percentage of patients who sent a report at
            least once in the last 7 days
          </p>
        </div>
        <div className="pb-6">
          <div className="text-sm">
            <text className="font-bold text-2xl">{reportedPatients} </text>
            patients reported
          </div>
          <div className="text-sm text-gray-500">from {totalPatients} patients</div>
        </div>
      </div>
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
    </div>
  );
}

export default PatientResponseRate;