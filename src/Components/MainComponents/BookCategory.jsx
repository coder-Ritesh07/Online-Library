import { NavLink } from "react-router-dom";
function BookCategory() {
  return (
    <div className="flex  ">
      <div className="flex">
        <aside className="md:w-[235px]  md:h-full sm:w-screen sm:h-[80px] min-[475px]:h-[80px] min-[425px]:h-[80px] min-[320px]:h-[80px] min-[475px]:p-1 min-[425px]:p-1 min-[320px]:p-[2px] min-[475px]:w-screen min-[425px]:w-screen flex min-[475px]:flex-wrap min-[425px]:flex-wrap min-[320px]:flex-wrap md:flex-col md:items-center md:justify-start sm:justify-between min-[475px]:justify-center min-[425px]:justify-center min-[320px]:justify-center min-[475px]:gap-2 min-[425px]:gap-2 min-[320px]:gap-[2px] sm:items-center sm:p-1 sm:flex-row  bg-[#118b50c9] min-[320px]:p-[2.5px]">
      <span className="bg-white md:font-semibold sm:font-[300] sm:h-8 sm:rounded md:rounded-md md:mb-2 min-[425px]:rounded min-[320px]:rounded">Also visit </span>
      <span className="bg-white md:font-semibold sm:font-[300] sm:h-8 sm:rounded  md:rounded-md min-[425px]:rounded min-[320px]:rounded">"/books/category/(topicName)"</span>
            <NavLink to="/fiction" className={({isActive})=>`list-none  bg-white rounded sm:h-8 min-[475px]:h-8 min-[425px]:h-8 min-[425px]:font-semibold min-[320px]:font-semibold min-[320px]:p-[2px] min-[425px]:p-1 md:h-8 sm:p-1 min-[475px]:p-[2px] md:p-2 md:mb-4 md:font-bold md:text-2xl text-black md:mt-8 hover:scale-105 transition${isActive}?"text-white":"text-black"`}>
            Fiction
            </NavLink>
            <NavLink to="/nonfiction" className={({isActive})=>`list-none bg-white rounded sm:h-8 min-[475px]:h-8 min-[425px]:h-8 min-[425px]:font-semibold min-[425px]:p-1 min-[320px]:font-semibold min-[320px]:p-[2px] sm:p-1  min-[475px]:p-[2px]  md:mb-4 md:font-bold md:text-2xl text-black md:mt-8 hover:scale-105 transition${isActive}?"text-white":"text-black"`}>
            Non-Fiction
            </NavLink>
            <NavLink to="/scifi" className={({isActive})=>`list-none bg-white rounded sm:h-8 min-[475px]:h-8 sm:p-1  min-[475px]:p-[2px] md:mb-4 min-[425px]:h-8 min-[425px]:font-semibold min-[425px]:p-1 min-[320px]:font-semibold min-[320px]:p-[2px] md:font-bold md:text-2xl text-black md:mt-8 hover:scale-105 transition${isActive}?"text-white":"text-black"`}>
            Sci-fi
            </NavLink>
            <NavLink to="/romance" className={({isActive})=>`list-none bg-white rounded sm:h-8 min-[475px]:h-8 sm:p-1  min-[475px]:p-[2px] md:mb-4 min-[425px]:h-8 min-[425px]:font-semibold min-[425px]:p-1 min-[320px]:font-semibold min-[320px]:p-[2px] md:font-bold md:text-2xl text-black md:mt-8 hover:scale-105 transition${isActive}?"text-white":"text-black"`}>
            Romance
            </NavLink>
            <NavLink to="/horror" className={({isActive})=>`list-none bg-white rounded sm:h-8 min-[475px]:h-8 sm:p-1  min-[475px]:p-[2px] md:mb-4 md:font-bold md:text-2xl min-[425px]:h-8 min-[425px]:font-semibold min-[425px]:p-1 min-[320px]:font-semibold min-[320px]:p-[2px] text-black md:mt-8 hover:scale-105 transition${isActive}?"text-white ":"text-black"`}>
            Horror
            </NavLink>
        </aside>
      </div>
    </div>
  );
}
export default BookCategory;
