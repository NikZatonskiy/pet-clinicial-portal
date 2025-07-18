function PatientsGraphCustomLegends({ data }) {
  return(
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
  )
}

export default PatientsGraphCustomLegends;