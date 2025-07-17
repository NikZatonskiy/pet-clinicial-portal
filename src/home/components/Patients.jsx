import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Cell,
  ResponsiveContainer
} from "recharts";
import patientsIcon from "../../assets/patients_icon.svg";

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
        <div className="home__main__patients__describe__title flex flex-col gap-5">
          <div className="flex text-lg font-semibold gap-5">
            <img alt="patients icon" src={patientsIcon} className="w-12" />
            <h2 className="flex items-center">Patients</h2>
          </div>
          <p>
            This statistic shows the total number of patients and the sex
            distribution
          </p>
        </div>
        <div className="home__main__patients__describe__total-number flex border-1 rounded-lg border-dashed gap-6 p-4 w-[160px]">
          <text className="font-bold text-4xl text-[#6960D7]">{totalNumber} </text>
          <text className="text-balance">Total number</text>
        </div>
         <div className="flex gap-6 mt-2 text-sm pt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6960D7] mr-2"></div>
            <text>Male</text>
            <text className="font-bold">{data[0]["amount"]}%</text>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E0DDFF] mr-2"></div>
            <text>Female</text>
            <text className="font-bold">{data[1]["amount"]}%</text>
          </div>
        </div>
      </div>
      {/* <BarChart width={300} height={250} data={data}> */}
      <ResponsiveContainer width="100%" height="80%">
        <BarChart width={300} height={250} data={data}>
          <XAxis dataKey="name" stroke="none" />
          <YAxis
            type="number"
            domain={[0, 100]}
            unit="%"
            tickCount={3}
            tickLine={false}
            axisLine={false}
          />
          {/* <Legend
            width={100}
            iconType="circle"
            wrapperStyle={{
              right: 250,
            }}
          /> */}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
          <Bar dataKey="amount" fill="#8884d8" barSize={80}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Patients;
