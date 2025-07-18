import MedicationGraph from "./MedicationGraph";
import MedicationGraphCustomLegend from "./MedicationGraphCustomLegend";

function Medication() {
  const data = [
    {
      name: "Medication",
      Ibrutinib: 40,
      Acalabrutinib: 37,
      Zanubrutinib: 13,
      Other: 10,
    },
  ];
  const colors = ["#5A6ACF", "#8593ED", "#C7CEFF", "#dadbe6ff"];
  const payload = [
    { value: "Ibrutinib 40%", color: colors[0] },
    { value: "Acalabrutinib 37%", color: colors[1] },
    { value: "Zanubrutinib 13%", color: colors[2] },
    { value: "Other 10%", color: colors[3] },
  ]

  return (
    <div className="p-6 bg-gray-100 border-1 border-gray-200 rounded-lg w-[100%]">
      <div className="flex items-start">
        <h3 className="font-semibold min-w-80px mr-18">
          Medication
        </h3>
        <MedicationGraph data={data} colors={colors} />
      </div>
      <MedicationGraphCustomLegend payload={payload} />
    </div>
  );
}

export default Medication;
