import { useState } from "react";
import infoIcon from "../../../assets/info_icon.svg";
import iconInInfoIcon from "../../../assets/icon_in_info.svg";

function InfoModal() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img
        alt="info icon"
        src={infoIcon}
        className="cursor-pointer"
      />
      {showTooltip && (
        <div className="absolute right-0 top-full mt-2 w-[250px] bg-white shadow-lg rounded-md p-6 z-50 border border-gray-200">
          <div className="flex align-center justify-center mb-4">
            <img
              alt="logo in info"
              src={iconInInfoIcon}
              className="w-[160px]"
            />
          </div>
          <div className="text-sm text-gray-700">
            <text className="font-bold">UT Health San Antonio MD Anderson Cancer Center </text>
            <text>is proud to offer world-renowned cancer care. We are the only NCI cancer center in Central and South Texas.</text>
          </div>
        </div>
      )}
    </div>
  )
}

export default InfoModal;