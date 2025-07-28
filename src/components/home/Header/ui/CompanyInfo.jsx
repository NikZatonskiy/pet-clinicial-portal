import infoIcon from "@assets/info_icon.svg";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { setShowTooltip } from "@slices/homeModalSlice";

function CompanyInfo() {
  const showTooltip = useSelector((state) => state.homeModal.showTooltip);
  const dispatch = useDispatch();

  return (
    <div
      className="relative"
      onMouseEnter={() => dispatch(setShowTooltip(true))}
      onMouseLeave={() => dispatch(setShowTooltip(false))}
    >
      <img alt="info icon" src={infoIcon} className="cursor-pointer" />
      {showTooltip && <Modal />}
    </div>
  );
}

export default CompanyInfo;
