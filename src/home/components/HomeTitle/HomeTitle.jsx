import companyIcon from "../../../assets/company_icon.svg";
import CompanyInfo from "./CompanyInfo";

function HomeTitle() {
  return (
    <div className="home__title w-[100%] flex justify-between subpixel-antialiased text-3xl font-semibold p-6">
      <h1 className="flex items-center">Hi, Edward, welcome back!</h1>
      <div className="flex gap-4 items-center">
        <img
          alt="company icon"
          src={companyIcon}
        />
        <CompanyInfo />
      </div>
    </div>
  )
}

export default HomeTitle;