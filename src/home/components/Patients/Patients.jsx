import PatientsDescription from "./PatientsDescription";
import PatientsGraph from "./PatientsGraph";
import PatientsGraphCustomLegends from "./PatientsGraphCustomLegends";

function Patients() {
  const data = [
    { name: "Male", amount: 45 },
    { name: "Female", amount: 55 },
  ];
  const colors = ["#6960D7", "#E0DDFF"];
  const totalNumber = 20;

  return (
    <div className="home__main__patients flex p-6 bg-gray-100 border-1 border-gray-200 rounded-lg w-auto justify-spaces">
      <div className="home__main__patients__describe flex flex-col justify-between">
        <PatientsDescription />
        <div className="home__main__patients__describe__total-number flex border-1 rounded-lg border-dashed gap-6 p-4 w-[160px]">
          <text className="font-bold text-4xl text-[#6960D7]">{totalNumber} </text>
          <text className="text-balance">Total number</text>
        </div>
        <PatientsGraphCustomLegends data={data} />
      </div>
      <PatientsGraph data={data} colors={colors} />
    </div>
  );
}

export default Patients;
