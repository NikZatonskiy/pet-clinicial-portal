import AverageScore from "./AverageScore";
import PatientResponseRate from "./PatientResponseRate";
import Patients from "./Patients";
import SymptomSummary from "./SymptomSummary";
import Header from "./Header";

function Home() {
  return (
    <main>
      <div className="home h-full">
        <Header />
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
