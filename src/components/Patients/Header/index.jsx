import notificationIcon from "../../../assets/patients/notification_icon.svg";
import helpIcon from "../../../assets/patients/help_icon.svg";

function Header() {
  return (
    <div className="home__title w-full flex justify-between items-center subpixel-antialiased p-6">
      <h1 className="flex text-3xl font-semibold">Patients</h1>
      <div className="flex gap-4 items-center">
        <img
          className="w-auto"
          alt="notification icon"
          src={notificationIcon}
        />
        <img className="w-auto" alt="help icon" src={helpIcon} />
      </div>
    </div>
  );
}

export default Header;
