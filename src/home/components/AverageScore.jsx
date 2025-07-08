function AverageScore() {
  return (
    <>
      <div className="home__main__averages-score">
        <div className="home__main__averages-score__physical-wellbeing flex border-4 rounded-lg">
          <img
            alt="patients icon"
            src="/src/assets/physical_wellbeing_icon.png"
            className="w-12"
          />
          <div>
            <h2>Physical Wellbeing</h2>
            <p>17 patients reported</p>
          </div>
          <div className="home__main__averages-score__physical-wellbeing__graph">
            <span>7.1</span>
            <span>Average score</span>
          </div>
        </div>

        <div className="home__main__averages-score__mood flex border-4 rounded-lg">
          <img
            alt="patients icon"
            src="/src/assets/mood_icon.png"
            className="w-12"
          />
          <div>
            <h2>Mood</h2>
            <p>17 patients reported</p>
          </div>
          <div className="home__main__averages-score__mood__graph">
            <span>8.2</span>
            <span>Average score</span>
          </div>
        </div>

        <div className="home__main__averages-score__medication flex border-4 rounded-lg">
          <img
            alt="patients icon"
            src="/src/assets/react.svg"
            className="w-12"
          />
          <div>
            <h2>Mood</h2>
            <p>17 patients reported</p>
          </div>
          <div className="home__main__averages-score__mood__graph">
            <span>8.2</span>
            <span>Average score</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AverageScore;
