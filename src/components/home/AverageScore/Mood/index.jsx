import moodIcon from "../../../../assets/home/mood_icon.svg";
import AverageScoreGraph from "../Graph";
import { score, data } from "./consts";

function Mood() {
  return (
    <div className="home__main__averages-score__mood flex bg-gray-100 border-1 border-gray-200 rounded-lg justify-between">
      <div className="flex p-6 gap-8">
        <img alt="mood icon" src={moodIcon} className="w-12 h-12" />
        <div>
          <h2 className="text-lg font-semibold">Mood</h2>
          <p>17 patients reported</p>
        </div>
      </div>
      <AverageScoreGraph data={data} score={score} />
    </div>
  );
}

export default Mood;
