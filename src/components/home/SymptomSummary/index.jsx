import Graph from "./Graph";
import { data, colors } from "./consts";

function SymptomSummary() {
  return (
    <div className="home__main__symptom-summary p-6 bg-gray-100 border-1 border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold">Symptom Summary</h2>
      <Graph data={data} colors={colors} />
    </div>
  );
}

export default SymptomSummary;
