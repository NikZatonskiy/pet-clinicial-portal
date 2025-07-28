import cn from "classnames";
import arrowDropDownIcon from "@assets/patients/arrow_drop_down_icon.svg";

const SortedButton = ({ column }) => (
  <button onClick={() => column.toggleSorting()} className="focus:outline-none">
    <img
      className={cn("w-5 transition-transform duration-200 ease-in-out", {
        "rotate-180": column.getIsSorted() === "asc",
      })}
      alt="arrow drop down icon"
      src={arrowDropDownIcon}
    />
  </button>
);

export default SortedButton;
