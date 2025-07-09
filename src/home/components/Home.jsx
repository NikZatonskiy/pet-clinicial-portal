import AverageScore from "./AverageScore/AverageScore";
import PatientResponseRate from "./PatientResponseRate";
import Patients from "./patients";
import SymptomSummary from "./SymptomSummary";

function Home() {
  return (
    <main>
      <div className="NaviBar" />
      <div className="home h-[100%]">
        <div className="home__title w-[100%] flex justify-between subpixel-antialiased text-3xl font-semibold p-6">
          <h1 className="flex items-center">Hi, Edward, welcome back!</h1>
          <img
            alt="company icon"
            src="/pet-clinicial-portal/src/assets/company_icon.png"
            className="home__title w-100"
          />
        </div>
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
