import moodIcon from "../../../../assets/mood_icon.svg";
import MoodGraph from "./MoodGraph";

function Mood() {
  const score = 8.2;
  const maxScore = 10;
  const data = [
    { name: "Score", value: score, color: "#FFAE63" },
    { name: "Remaining", value: maxScore - score, color: "#f3f4f6" },
  ];

  return (
    <div className="home__main__averages-score__mood flex bg-gray-100 border-1 border-gray-200 rounded-lg justify-between">
      <div className="flex p-6 gap-8">
        <img alt="patients icon" src={moodIcon} className="w-12 h-12" />
        <div>
          <h2 className="text-lg font-semibold">Mood</h2>
          <p>17 patients reported</p>
        </div>
      </div>
      <MoodGraph data={data} score={score} />
    </div>
  );
}

export default Mood;
