import { NavLink} from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#118B50] flex justify-between items-center md:h-20 sm:h-[70px] min-[475px]:h-[70px] min-[425px]:h-[60px] min-[320px]:h-[60px] min-[320px]:p-1 md:p-2 sm:p-2 p-2 min-[320px]:p-[2px] min-[425px]:p-1 sticky top-0 z-50">
      <div>
        <h1 className="md:text-[35px] min-[475px]:text-[18px] min-[475px]:font-semibold sm:text-[20px] sm:font-semibold text-white  md:font-bold min-[425px]:text-[16px] min-[425px]:font-bold min-[320px]:text-[13px] min-[320px]:font-semibold">
          Online
          <span className="bg-white rounded text-[#118B50] md:text-3xl sm:text-[23px] min-[475px]:text-[20px] min-[475px]:font-semibold min-[475px]:p-1 p-2 min-[425px]:p-1 min-[425px]:font-bold min-[320px]:font-semibold min-[320px]:text-[13px] min-[320px]:p-[2px]">
            Library
          </span>
        </h1>
      </div>
      <div className="flex">
        <li className="list-none md:text-[28px] sm:text-[20px] min-[475px]:text-[16px] min-[475px]:font-semibold min-[475px]:mr-3 sm:font-semibold md:font-bold sm:mr-4 md:mr-8 text-white hover:scale-105 transition min-[425px]:text-[16px] min-[425px]:font-semibold min-[425px]:mr-2 min-[320px]:mr-[6px] min-[320px]:text-[14px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-[#c5c3c3]" : "text-white"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="list-none md:text-[28px] md:font-bold sm:text-[20px] sm:font-semibold md:mr-8 sm:mr-4 min-[475px]:text-[16px] min-[475px]:font-semibold min-[475px]:mr-3  text-white hover:scale-105 transition min-[425px]:text-[16px] min-[425px]:font-semibold  min-[320px]:text-[14px]">
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              `${isActive ? " text-[#c5c3c3]" : " text-white"}`
            }
          >
            Browse Books
          </NavLink>
        </li>
      </div>
      <div>
        <NavLink
          to="/addbooks"
          className={({ isActive }) => (isActive ? "hidden" : "block")}
        >
          <button className="md:text-2xl sm:text-xl min-[475px]:text-[16px] min-[475px]:font-bold sm:font-bold md:font-bold border rounded-md hover:scale-105 transition p-2 min-[425px]:p-1 bg-white text-[#118B50] min-[425px]:text-[15px] min-[425px]:font-semibold min-[320px]:text-[13px] min-[320px]:p-[2px] min-[320px]:font-semibold min-[320px]:rounded ">
            Add Books
          </button>
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
