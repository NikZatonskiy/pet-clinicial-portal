import AverageScore from "./AverageScore";
import PatientResponseRate from "./PatientResponseRate";
import Patients from "./patients";
import SymptomSummary from "./SymptomSummary";

function Home() {
  return (
    <main>
      <div className="NaviBar" />
      <div className="home h-[100%]">
        <div className="home__title w-[100%] flex justify-between">
          <h1>Hi, Edward, welcome back</h1>
          <img
            alt="company icon"
            src="/src/assets/company_icon.png"
            className="home__title w-100"
          />
        </div>
        <div className="home__main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Patients />
          <AverageScore />
          <PatientResponseRate />
          <SymptomSummary />
        </div>
      </div>
    </main>
  );
}

export default Home;
