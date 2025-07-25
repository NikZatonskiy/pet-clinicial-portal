import { NavLink } from "react-router";
import homeIcon from "../../assets/navbar/home_icon.svg";
import patientsIcon from "../../assets/navbar/patients_icon.svg";

export const HomeLink = () => {
  return (
    <NavLink
      to="/pet-clinicial-portal/home/"
      // className="nav-links flex justify-center opacity-[50%]"
      className={({ isActive }) => [
        isActive
          ? "nav-links flex justify-center"
          : "nav-links flex justify-center opacity-[50%]",
      ]}
    >
      <img alt="home icon" src={homeIcon} className="w-[60px] " />
    </NavLink>
  );
};

export const PatientsLink = () => {
  return (
    <NavLink
      to="/pet-clinicial-portal/patients/"
      className={({ isActive }) => [
        isActive
          ? "nav-links flex justify-center"
          : "nav-links flex justify-center opacity-[50%]",
      ]}
    >
      <img alt="patients icon" src={patientsIcon} className="w-[90px]" />
    </NavLink>
  );
};
