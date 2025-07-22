import Graph from "./Graph";
import GraphLegend from "./GraphLegend";
import { data, colors, payload } from "./consts";

function Medication() {
  return (
    <div className="p-6 bg-gray-100 border-1 border-gray-200 rounded-lg w-full">
      <div className="flex items-start">
        <h3 className="font-semibold min-w-80px mr-18">Medication</h3>
        <Graph data={data} colors={colors} />
      </div>
      <GraphLegend payload={payload} />
    </div>
  );
}

export default Medication;
