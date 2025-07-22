import { Link } from "react-router";
import homeIcon from "../../assets/navbar/home_icon.svg";

export const HomeLink = () => {
  return (
    <Link to="/pet-clinicial-portal/" className="nav-links">
      <img alt="home icon" src={homeIcon} className="w-[70px]" />
    </Link>
  );
};
