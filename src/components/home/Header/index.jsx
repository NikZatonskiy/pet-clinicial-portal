import companyIcon from "@assets/home/company_icon.svg";
import CompanyInfo from "./ui/CompanyInfo";

function Header() {
  return (
    <div className="home__title w-full flex justify-between items-center subpixel-antialiased p-6">
      <h1 className="flex text-3xl font-semibold">Hi, Edward, welcome back!</h1>
      <div className="flex gap-4 items-center">
        <img className="w-xs" alt="company icon" src={companyIcon} />
        <CompanyInfo />
      </div>
    </div>
  );
}

export default Header;
