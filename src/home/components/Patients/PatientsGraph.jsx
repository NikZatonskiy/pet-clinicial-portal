import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Text
} from "recharts";

function PatientsGraph({ data, colors }) {
  return(
    <div className="w-[100%] h-[100%] relative">
      <ResponsiveContainer
        width="100%"
        height="70%"
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
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
            // width={100}
            iconType="none"
            // wrapperStyle={{
            //   right: 250,
            // }}
          /> */}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
          <Bar dataKey="amount" fill="#8884d8" barSize={80}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
          {/* {data.map((entry, index) => (
            <Text
              key={`value-${index}`}
              x={entry.amount + 5} // Позиция справа от столбца
              y={index * 100 + 35} // Позиция по вертикали
              textAnchor="start"
              fill="#000"
              fontSize={12}
            >
              {entry.value}
            </Text>
          ))} */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PatientsGraph;