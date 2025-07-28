import iconInInfoIcon from "@assets/home/icon_in_info.svg";

function Modal() {
  return (
    <div className="absolute right-0 top-full mt-2 w-3xs bg-white shadow-lg rounded-md p-6 z-50 border border-gray-200">
      <div className="flex align-center justify-center mb-4">
        <img alt="logo in info" src={iconInInfoIcon} className="w-3xs" />
      </div>
      <div className="text-sm text-gray-700">
        <p className="font-bold">
          UT Health San Antonio MD Anderson Cancer Center
        </p>
        <p>
          is proud to offer world-renowned cancer care. We are the only NCI
          cancer center in Central and South Texas.
        </p>
      </div>
    </div>
  );
}

export default Modal;
