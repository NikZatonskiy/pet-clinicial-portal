import { Link } from "react-router";
import poweredLogo from "./assets/powered_logo.svg";
import homeIcon from "./assets/home_icon.svg";
import printIcon from "./assets/print_icon.svg";

function NavBar() {
  return (
    <nav className="navbar bg-gray-100 p-4 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-15">
        <div className="">
          <img
            alt="powered logo"
            src={poweredLogo}
            className="w-[90px]"
          />
        </div>
        <div className="navbar-container">
          <ul className="nav-menu align-center justify-center">
            <li className="nav-item p-4">
              <Link to="/pet-clinicial-portal/" className="nav-links">
                <img
                  alt="home icon"
                  src={homeIcon}
                  className="w-[70px]"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <img
          alt="print icon"
          src={printIcon}
          className="w-[90px]"
        />
      </div>
    </nav>
  );
};

export default NavBar;