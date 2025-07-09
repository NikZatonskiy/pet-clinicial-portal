import PhysicalWellbeing from "./PhysicalWellbeing";
import Mood from "./Mood";
import Medication from "./Medication";

function AverageScore() {
  return (
    <div className="home__main__averages-score grid gap-6">
      <PhysicalWellbeing />
      <Mood />
      <Medication />
    </div>
  );
}

export default AverageScore;
