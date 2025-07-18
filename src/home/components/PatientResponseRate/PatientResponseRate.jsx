import PatientResponseRateGraph from "./PatientResponseRateGraph";

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
      <PatientResponseRateGraph data={data} reportedPercentage={reportedPercentage} />
    </div>
  );
}

export default PatientResponseRate;