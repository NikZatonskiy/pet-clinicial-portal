export const data = [
  { name: "Reported", value: 17, color: "#6960D7" },
  { name: "Not reported", value: 3, color: "#e5e7eb" },
];
export const totalPatients = data.reduce(
  (acc, { name, value }) => acc + value,
  0
);
export const reportedPatients = data[0].value;

export const reportedPercentage = Math.round(
  ((data[0]["value"] ?? 0) / totalPatients) * 100
).toFixed(0);
