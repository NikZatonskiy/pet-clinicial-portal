import { useState } from "react";
import infoIcon from "../../../../assets/info_icon.svg";
import Modal from "./Modal";

function CompanyInfo() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img alt="info icon" src={infoIcon} className="cursor-pointer" />
      {showTooltip && <Modal />}
    </div>
  );
}

export default CompanyInfo;
