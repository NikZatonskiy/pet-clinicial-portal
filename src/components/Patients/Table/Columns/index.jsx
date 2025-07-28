import { useState } from "react";
import detailIcon from "@assets/patients/detail_icon.svg";
import infoIcon from "@assets/info_icon.svg";
import Modal from "../ui/Modal";
import SortedButton from "../ui/SortedButton";
import cn from "classnames";
import { colorMap } from "../consts";

const HeaderWithSort = ({ column, title, subTitle, center = false }) => (
  <div className={cn({ "text-center": center })}>
    <div
      className={cn("flex gap-1", { "justify-center items-center": center })}
    >
      <strong className="text-sm">{title}</strong>
      {column?.getCanSort?.() && <SortedButton column={column} />}
    </div>
    {subTitle && (
      <div className="text-gray-500 font-normal text-sm">{subTitle}</div>
    )}
  </div>
);

const SymptomSeverity = ({ name, severity }) => (
  <div className="flex items-center gap-1">
    <div
      className={`size-[7px] rounded-full ${
        colorMap[severity] || colorMap.Mild
      }`}
    />
    <div className="flex items-center text-sm gap-1">
      <p>{name}</p>
      <p className="text-gray-500 text-sm font-normal">({severity})</p>
    </div>
  </div>
);

const getColumns = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return [
    {
      header: ({ column }) => <HeaderWithSort column={column} title="Name" />,
      accessorKey: "name",
      cell: (info) => (
        <strong className="text-sm font-bold">{info.getValue()}</strong>
      ),
      enableSorting: true,
    },
    {
      header: () => (
        <div>
          <HeaderWithSort title="Medication" />
          <div className="flex gap-1">
            <span className="text-gray-500 font-normal text-sm">
              Dose / frequency
            </span>
          </div>
        </div>
      ),
      accessorKey: "medication",
      cell: (info) => {
        const { name, dose, frequency } = info.getValue();
        return (
          <div className="flex flex-col gap-2">
            <strong className="text-sm font-normal">{name}</strong>
            <div className="flex justify-between text-gray-500 text-sm font-normal">
              <span>
                ({dose} / {frequency})
              </span>
            </div>
          </div>
        );
      },
    },
    {
      header: () => (
        <div>
          <HeaderWithSort title="Symptoms" />
          <div className="flex gap-1">
            <span className="text-gray-500 font-normal text-sm">Severity</span>
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <img alt="info" src={infoIcon} className="cursor-pointer" />
              {showTooltip && <Modal />}
            </div>
          </div>
        </div>
      ),
      accessorKey: "symptoms",
      cell: (info) => (
        <div className="flex flex-col gap-2">
          {info.getValue().map((symptom, i) => (
            <SymptomSeverity key={i} {...symptom} />
          ))}
        </div>
      ),
    },
    {
      header: ({ column }) => (
        <HeaderWithSort
          column={column}
          title="Physical Wellbeing"
          subTitle="In the last 7 days"
          center
        />
      ),
      accessorKey: "physicalWellbeing",
      cell: (info) => (
        <div className="text-center text-xl">{info.getValue().toFixed(1)}</div>
      ),
      enableSorting: true,
    },
    {
      header: ({ column }) => (
        <HeaderWithSort
          column={column}
          title="Mood"
          subTitle="In the last 7 days"
          center
        />
      ),
      accessorKey: "mood",
      cell: (info) => (
        <div className="text-center text-xl">{info.getValue().toFixed(1)}</div>
      ),
      enableSorting: true,
    },
    {
      header: ({ column }) => (
        <HeaderWithSort
          column={column}
          title="Medication Adherence"
          subTitle="In the last 7 days"
          center
        />
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
      header: () => <HeaderWithSort title="View Details" center />,
      accessorKey: "viewDetails",
      cell: () => (
        <div className="flex justify-center">
          <button className="rounded-full">
            <img className="w-auto" alt="detail" src={detailIcon} />
          </button>
        </div>
      ),
    },
  ];
};

export default getColumns;
