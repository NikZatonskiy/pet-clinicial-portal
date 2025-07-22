import { totalNumber } from "./consts";

function GraphLegends({ data }) {
  const malePercentage = (
    ((data[0]["value"] ?? 0) / totalNumber) *
    100
  ).toFixed(0);
  const femalePercentage = (
    ((data[1]["value"] ?? 0) / totalNumber) *
    100
  ).toFixed(0);

  return (
    <div className="flex gap-6 mt-2 text-sm pt-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#6960D7] mr-2" />
        <text>Male</text>
        <text className="font-bold">{malePercentage}%</text>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#E0DDFF] mr-2" />
        <text>Female</text>
        <text className="font-bold">{femalePercentage}%</text>
      </div>
    </div>
  );
}

export default GraphLegends;
