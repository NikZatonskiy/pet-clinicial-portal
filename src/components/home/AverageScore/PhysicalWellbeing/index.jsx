import physicalWellbeingIcon from "@assets/home/physical_wellbeing_icon.svg";
import AverageScoreGraph from "../Graph";
import { score, data } from "./consts";

function PhysicalWellbeing() {
  return (
    <div className="home__main__averages-score__physical-wellbeing flex bg-gray-100 border-1 border-gray-200 rounded-lg justify-between">
      <div className="flex p-6 gap-8">
        <img
          alt="physical wellbeing icon"
          src={physicalWellbeingIcon}
          className="w-12 h-12"
        />
        <div>
          <h2 className="text-lg font-semibold">Physical Wellbeing</h2>
          <p>17 patients reported</p>
        </div>
      </div>
      <AverageScoreGraph data={data} score={score} />
    </div>
  );
}

export default PhysicalWellbeing;
