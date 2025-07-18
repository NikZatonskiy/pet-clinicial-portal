import physicalWellbeingIcon from "../../../../assets/physical_wellbeing_icon.svg";
import PhysicalWellbeingGraph from "./PhysicalWellbeingGraph";

function PhysicalWellbeing() {
  const score = 7.1;
  const maxScore = 10;
  const data = [
    { name: "Score", value: score, color: "#FF5492" },
    { name: "Remaining", value: maxScore - score, color: "#f3f4f6" },
  ];

  return (
    <div className="home__main__averages-score__physical-wellbeing flex bg-gray-100 border-1 border-gray-200 rounded-lg justify-between">
      <div className="flex p-6 gap-8">
        <img
          alt="patients icon"
          src={physicalWellbeingIcon}
          className="w-12 h-12"
        />
        <div>
          <h2 className="text-lg font-semibold">Physical Wellbeing</h2>
          <p>17 patients reported</p>
        </div>
      </div>
      <PhysicalWellbeingGraph data={data} score={score} />
    </div>
  );
}

export default PhysicalWellbeing;
