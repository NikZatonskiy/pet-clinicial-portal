import poweredLogo from "../../assets/navbar/powered_logo.svg";
import printIcon from "../../assets/navbar/print_icon.svg";
import { HomeLink, PatientsLink } from "./links";

function NavBar() {
  return (
    <nav>
      <div className="navbar flex flex-col items-center justify-between h-full bg-gray-100 p-4">
        <div className="flex flex-col gap-15">
          <div className="nav-menu flex justify-center">
            <img alt="powered logo" src={poweredLogo} className="w-[90px]" />
          </div>
          <div className="navbar-container">
            <ul className="nav-menu flex flex-col justify-center gap-5">
              <li className="nav-item p-4">
                <HomeLink />
              </li>
              <li className="nav-item p-4">
                <PatientsLink />
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-menu flex justify-center">
          <img alt="print icon" src={printIcon} className="w-[90px]" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
