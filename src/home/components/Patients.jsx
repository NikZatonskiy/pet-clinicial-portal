import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from "recharts";

function Patients() {
  const data = [
    { name: "Male", amount: 48 },
    { name: "Female", amount: 52 },
  ];
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="home__main__patients flex border-1 rounded-lg w-auto justify-spaces">
      <div className="home__main__patients__describe">
        <div className="home__main__patients__describe__title flex">
          <img
            alt="patients icon"
            src="/src/assets/patients_icon.png"
            className="w-12"
          />
          <h2>Patients</h2>
        </div>
        <p>
          This statistic shows the total number of patients and the sex
          distribution
        </p>
        <div className="home__main__patients__describe__total-number ">
          <span>20</span>
          <span>Total number</span>
        </div>
      </div>
      <BarChart width={300} height={250} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis dataKey="total" unit="%" tickCount={3} />
        <Legend width={100} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
        <Bar dataKey="amount" fill="#8884d8" barSize={60} />
      </BarChart>
    </div>
  );
}

export default Patients;
