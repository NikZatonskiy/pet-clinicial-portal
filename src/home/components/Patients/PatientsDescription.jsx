import patientsIcon from "../../../assets/patients_icon.svg";

function PatientsDescription() {
  return(
    <div className="home__main__patients__describe__title flex flex-col gap-5">
      <div className="flex text-lg font-semibold gap-5">
        <img alt="patients icon" src={patientsIcon} className="w-12" />
        <h2 className="flex items-center">Patients</h2>
      </div>
      <text>
        This statistic shows the total number of patients and the sex
        distribution
      </text>
    </div>
  )
}

export default PatientsDescription;