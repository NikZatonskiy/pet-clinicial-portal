import { Legend, Cell, PieChart, Pie, Label } from "recharts";

function PatientResponseRate() {
  const data = [
    { name: "Reported", value: 85, color: "#6960D7" },
    { name: "Not reported", value: 15, color: "#e5e7eb" },
  ];

  const totalCount = data.reduce((sum, item) => sum + item.value, 0);
  const reportedCount = data.find((item) => item.name === "Reported").value;
  const reportedPercentage = Math.round((reportedCount / totalCount) * 100);

  return (
    <div className="home__main__patient-response-rate flex p-6 bg-gray-100 border-1 border-gray-200 rounded-lg justify-between">
      <div className="w-[40%]">
        <h2 className="text-lg font-semibold">Patient Response Rate</h2>
        <p className="pt-6">
          This statistic shows the percentage of patients who sent a report at
          least once in the last 7 days
        </p>
        <div className="home__main__patient-response-rate__reports">
          <span>17 patients report</span>
          <span>from 20 patients</span>
        </div>
      </div>
      <div className="home__main__patient-response-rate__graph l-100">
        <PieChart width={300} height={250}>
          <Pie
            cx="50%"
            cy="50%"
            data={[{ value: 100 }]}
            outerRadius={70}
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
            innerRadius={80}
            outerRadius={90}
            dataKey="value"
            paddingAngle={0}
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
            <Legend></Legend>
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default PatientResponseRate;
