import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
function Error() {
  let err = useRouteError();
  return (
    <>
      <div className="bg-[#7daf8cd4] h-screen">
        <Link to="/" className="self-start">
          <button className="self-start md:text-2xl min-[320px]:xl min-[320px]:mb-[50px] font-bold border rounded-md hover:scale-105 transition p-2 bg-white text-[#118B50] mt-5 ml-5">
           Back To Home
          </button>
        </Link>

        <div className=" flex justify-center items-center ">
          <div className="bg-black rounded-md md:p-9 text-center flex flex-col">
            <h1 className="text-white md:text-2xl font-bold ">Opps!...</h1>
            <h1 className="text-white md:text-2xl font-bold ">
              Something went Wrong
            </h1>
            <h1 className="text-red-700 md:text-3xl md:font-extrabold">{err.data}</h1>
            <h1 className="text-red-700 md:text-3xl md:font-extrabold">
              {err.status}
              {`"${err.statusText}"`}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Error;
