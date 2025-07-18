import { Cell, ResponsiveContainer, PieChart, Pie, Label } from "recharts";

function MoodGraph({ data, score }) {
  return(
    <div className="home__main__averages-score__mood__graph w-[40%] flex items-center pr-8">
      <ResponsiveContainer width="60%" height="100%">
        <PieChart className="p-1">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            innerRadius={36}
            outerRadius={42}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Label
            value={score}
            position="center"
            fontSize={24}
            fill="#333"
            fontWeight="bold"
          />
        </PieChart>
      </ResponsiveContainer>
      <span className="whitespace-nowrap">Average score</span>
    </div>
  )
}

export default MoodGraph;