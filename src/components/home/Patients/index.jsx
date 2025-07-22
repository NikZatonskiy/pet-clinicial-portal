import PatientsInfo from "./PatientsInfo";
import Graph from "./Graph";
import GraphLegends from "./GraphLegends";
import { data, totalNumber } from "./consts";

function Patients() {
  return (
    <div className="home__main__patients flex p-6 bg-gray-100 border-1 border-gray-200 rounded-lg w-auto justify-spaces">
      <div className="home__main__patients__describe flex flex-col justify-between">
        <PatientsInfo />
        <div className="home__main__patients__describe__total-number flex border-3 rounded-lg border-dashed border-gray-300 gap-6 p-4 max-w-[160px] max-h-[80px]">
          <text className={`font-bold text-4xl text-[#6960D7]`}>
            {totalNumber}
          </text>
          <text className="text-balance">Total number</text>
        </div>
        <GraphLegends data={data} />
      </div>
      <Graph data={data} />
    </div>
  );
}

export default Patients;
