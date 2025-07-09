import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function Patients() {
  const data = [
    { name: "Male", amount: 48, total: 100 },
    { name: "Female", amount: 52, total: 100 },
  ];

  return (
    <div className="home__main__patients flex border-1 rounded-lg w-auto justify-spaces">
      <div className="home__main__patients__describe">
        <div className="home__main__patients__describe__title flex">
          <img
            alt="patients icon"
            src="/pet-clinicial-portal/src/assets/patients_icon.png"
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
        {/* <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} /> */}
        <Legend
          width={100}
          // wrapperStyle={{
          //   top: 40,
          //   right: 20,
          //   backgroundColor: "#f5f5f5",
          //   border: "1px solid #d5d5d5",
          //   borderRadius: 3,
          //   lineHeight: "40px",
          // }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
        <Bar dataKey="amount" fill="#8884d8" barSize={60} />
      </BarChart>
    </div>
  );
}

export default Patients;
