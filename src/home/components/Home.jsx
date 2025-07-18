import AverageScore from "./AverageScore/AverageScore";
import PatientResponseRate from "./PatientResponseRate/PatientResponseRate";
import Patients from "./Patients/Patients";
import SymptomSummary from "./SymptomSummary/SymptomSummary";
import HomeTitle from "./HomeTitle/HomeTitle";

function Home() {
  return (
    <main>
      <div className="home h-[100%]">
        <HomeTitle />
        <div className="home__main grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
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