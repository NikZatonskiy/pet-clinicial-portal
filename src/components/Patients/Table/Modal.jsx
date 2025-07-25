function Modal() {
  return (
    <div className="absolute left-0 mt-2 size-auto bg-[#272543] shadow-lg rounded-xl p-6 z-50 border border-gray-200">
      <div className="flex flex-col justify-between gap-2">
        <div className="flex gap-1 w-full items-center text-white font-bold text-nowrap">
          <div className="size-[7px] rounded-full bg-red-400" />
          <p>Very Severe</p>
        </div>
        <div className="flex gap-1 w-full items-center text-white font-bold text-nowrap">
          <div className="size-[7px] rounded-full bg-orange-400" />
          <p>Severe</p>
        </div>
        <div className="flex gap-1 w-full items-center text-white font-bold text-nowrap">
          <div className="size-[7px] rounded-full bg-yellow-400" />
          <p>Moderate</p>
        </div>
        <div className="flex gap-1 w-full items-center text-white font-bold text-nowrap">
          <div className="size-[7px] rounded-full bg-green-400" />
          <p>Mild</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
