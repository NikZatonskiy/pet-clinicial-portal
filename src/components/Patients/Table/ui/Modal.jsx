import { colorMap } from "../consts";

const Modal = () => (
  <div className="absolute left-0 mt-2 size-auto bg-[#272543] shadow-lg rounded-xl p-6 z-50 border border-gray-200">
    <div className="flex flex-col justify-between gap-2">
      {Object.entries(colorMap).map(([key, value], index) => (
        <div
          key={index}
          className="flex gap-1 w-full items-center text-white font-bold text-nowrap"
        >
          <div className={`size-[7px] rounded-full ${value}`} />
          <p>{key}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Modal;
