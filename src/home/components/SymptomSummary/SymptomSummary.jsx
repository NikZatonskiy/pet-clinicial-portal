import SymptomSummaryGraph from "./SymptomSummaryGraph";

function SymptomSummary() {
  const data = [
    { name: "Diarrhea", value: 37 },
    { name: "Heart palpitations", value: 25 },
    { name: "Muscle aches", value: 15 },
    { name: "Bruising", value: 13 },
    { name: "Fatigue", value: 10 },
  ]
  const colors = ["#6960D7", "#C08EFF", "#52B793", "#2FBFDE", "#4EAAFF"]

  return (
    <div className="home__main__symptom-summary p-6 bg-gray-100 border-1 border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold">Symptom Summary</h2>
      <SymptomSummaryGraph data={data} colors={colors} />
    </div>
  );
}

export default SymptomSummary;
