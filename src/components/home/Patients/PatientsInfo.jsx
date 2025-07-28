import patientsIcon from "@assets/home/patients_icon.svg";

function PatientsInfo() {
  return (
    <div className="home__main__patients__describe__title flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <img alt="patients icon" src={patientsIcon} className="w-12" />
        <h2 className="text-lg font-semibold">Patients</h2>
      </div>
      <p>
        This statistic shows the total number of patients and the sex
        distribution
      </p>
    </div>
  );
}

export default PatientsInfo;
