export const data = [
  { name: "Male", value: 9, color: "#6960D7" },
  { name: "Female", value: 11, color: "#E0DDFF" },
];

export const totalNumber = data.reduce(
  (acc, { name, value }) => acc + value,
  0
);
