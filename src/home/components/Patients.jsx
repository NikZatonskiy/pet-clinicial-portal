import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Cell,
} from "recharts";
import patientsIcon from "../../assets/patients_icon.png";

function Patients() {
  const data = [
    { name: "Male", amount: 48 },
    { name: "Female", amount: 52 },
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  return (
    <div className="home__main__patients flex p-6 bg-gray-100 border-1 border-gray-200 rounded-lg w-auto justify-spaces">
      <div className="home__main__patients__describe">
        <div className="home__main__patients__describe__title flex text-lg font-semibold gap-5">
          <img alt="patients icon" src={patientsIcon} className="w-12" />
          <h2 className="flex items-center">Patients</h2>
        </div>
        <p>
          This statistic shows the total number of patients and the sex
          distribution
        </p>
        <div className="flex w-24 border-2 border-dotted home__main__patients__describe__total-number ">
          <span>20</span>
          <span>Total number</span>
        </div>
      </div>
      <BarChart width={300} height={250} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis
          type="number"
          domain={[0, 100]}
          unit="%"
          tickCount={3}
          labelLine={false}
        />
        <Legend
          width={100}
          iconType="circle"
          wrapperStyle={{
            right: 250,
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
        <Bar dataKey="amount" fill="#8884d8" barSize={60}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

export default Patients;
