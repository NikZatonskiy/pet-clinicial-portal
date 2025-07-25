import arrowDropDownIcon from "../../../assets/patients/arrow_drop_down_icon.svg";

function SortedButton({ column }) {
  const isSorted = column.getIsSorted();

  return (
    <button
      onClick={() => {
        if (isSorted === "asc") {
          column.toggleSorting(true);
        } else {
          column.toggleSorting(false);
        }
      }}
      className="focus:outline-none"
    >
      <img
        className="w-5"
        alt="arrow drop down icon"
        src={arrowDropDownIcon}
        style={{
          transform: isSorted === "asc" ? "rotate(180deg)" : "none",
          transition: "transform 0.2s ease",
        }}
      />
    </button>
  );
}

export default SortedButton;
