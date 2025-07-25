import { useState } from "react";
import detailIcon from "../../../assets/patients/detail_icon.svg";
import infoIcon from "../../../assets/info_icon.svg";
import Modal from "./Modal";
import SortedButton from "./Button";

function getColumns() {
  const [showTooltip, setShowTooltip] = useState(false);
  const subHeader = "text-gray-500 font-normal text-sm";

  return [
    {
      header: ({ column }) => (
        <div className="flex gap-1">
          <strong className="text-sm">Name</strong>
          {column.getCanSort() && <SortedButton column={column} />}
        </div>
      ),
      accessorKey: "name",
      cell: (info) => (
        <strong className="text-sm font-bold">{info.getValue()}</strong>
      ),
      enableSorting: true,
      sortingFn: "basic",
    },
    {
      header: () => (
        <div>
          <div>
            <strong className="text-sm">Medication</strong>
          </div>
          <div className="flex justify-between">
            <span className={subHeader}>Dose / frequency</span>
          </div>
        </div>
      ),
      accessorKey: "medication",
      cell: (info) => (
        <div className="flex flex-col gap-2">
          <div>
            <strong className="text-sm font-normal">
              {info.getValue().name}
            </strong>
          </div>
          <div className="flex justify-between text-gray-500 text-sm font-normal">
            <span>
              ({info.getValue().dose} / {info.getValue().frequency})
            </span>
            <span></span>
          </div>
        </div>
      ),
      enableSorting: false,
    },
    {
      header: () => (
        <div>
          <div>
            <strong className="text-sm">Symptoms</strong>
          </div>
          <div className="flex gap-1">
            <span className={subHeader}>Severity</span>
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div className="flex h-full justify-center">
                <img
                  alt="info icon"
                  src={infoIcon}
                  className="cursor-pointer"
                />
              </div>
              {showTooltip && <Modal />}
            </div>
          </div>
        </div>
      ),
      accessorKey: "symptoms",
      cell: (info) => (
        <div className="flex flex-col gap-2">
          {info.getValue().map((symptom, index) => {
            let styleSeverity = "size-[7px] rounded-full ";

            switch (symptom.severity) {
              case "Very Severe":
                styleSeverity += "bg-red-400";
                break;
              case "Severe":
                styleSeverity += "bg-orange-400";
                break;
              case "Moderate":
                styleSeverity += "bg-yellow-400";
                break;
              case "Mild":
              default:
                styleSeverity += "bg-green-600";
            }

            return (
              <div key={index} className="flex items-center gap-1">
                <div className={styleSeverity} />
                <div className="flex items-center text-sm gap-1">
                  <p>{symptom.name}</p>
                  <p className="text-gray-500 text-sm font-normal">
                    ({symptom.severity})
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ),
      enableSorting: false,
    },
    {
      header: ({ column }) => (
        <div className="text-center">
          <div className="flex gap-1 justify-center">
            <strong className="text-sm">Physical Wellbeing</strong>
            {column.getCanSort() && <SortedButton column={column} />}
          </div>
          <div className={subHeader}>In the last 7 days</div>
        </div>
      ),
      accessorKey: "physicalWellbeing",
      cell: (info) => (
        <div className="text-center items-center text-xl">
          {info.getValue().toFixed(1)}
        </div>
      ),
    },
    {
      header: ({ column }) => (
        <div className="text-center">
          <div className="flex gap-1 justify-center">
            <strong className="text-sm">Mood</strong>
            {column.getCanSort() && <SortedButton column={column} />}
          </div>
          <div className={subHeader}>In the last 7 days</div>
        </div>
      ),
      accessorKey: "mood",
      cell: (info) => (
        <div className="text-center text-xl">{info.getValue().toFixed(1)}</div>
      ),
    },
    {
      header: ({ column }) => (
        <div className="text-center">
          <div className="flex gap-1 justify-center items-center">
            <strong className="text-sm">Medication Adherence</strong>
            {column.getCanSort() && <SortedButton column={column} />}
          </div>
          <div className={subHeader}>In the last 7 days</div>
        </div>
      ),
      accessorKey: "medicationAdherence",
      cell: (info) => (
        <div className="flex h-full justify-center items-center text-purple-500 text-xl">
          {info.getValue()}
        </div>
      ),
      enableSorting: true,
    },
    {
      header: () => (
        <div className="items-center">
          <strong className="text-sm">View Details</strong>
        </div>
      ),
      accessorKey: "viewDetails",
      cell: () => (
        <div className="flex justify-center">
          <button className="rounded-full">
            <img className="w-auto" alt="detail icon" src={detailIcon} />
          </button>
        </div>
      ),
    },
  ];
}

export default getColumns;
