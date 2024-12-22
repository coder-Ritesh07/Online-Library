import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function BrowseDetails() {
  let showdetails = useSelector((store) => store.card.books);
  let bookdata = useParams();
  let resbooks = showdetails.filter((book) => book.id == bookdata.id);
  return (
    <>
      <Header />
      {resbooks.map((book) => {
        return (
          <>
            <div className="bg-[#7daf8cd4] h-full flex justify-center">
              <Link to="/browse">
                <button className="self-start md:text-2xl min-[320px]:text-[14px] min-[320px]:p-[2px] min-[320px]:font-semibold min-[320px]:ml-[5px] min-[320px]:mt-[10px] md:font-bold border rounded-md hover:scale-105 transition p-2 bg-white text-[#118B50] md:mt-5 md:ml-5">
                  Back Browser
                </button>
              </Link>
              <div className="my-0 mx-auto max-w-[90%] pt-8 flex flex-col items-center min-[320px]:my-[30px]">
                <img
                  src={book.image}
                  alt="Error img not Found"
                  className="md:w-[300px] md:h-[250px] min-[320px]:w-[250px] min-[320px]:h-[200px]  rounded-md"
                />
                <span className="md:text-2xl min-[320px]:text-[14px]  md:font-bold text-[#313030] md:mt-4">
                  Author Name-
                  <span className="text-[#fff] bg-[#118B50] rounded p-1 min-[320px]:text-[14px]">
                    {book.authorname}
                  </span>
                </span>
                <span className="md:text-2xl min-[320px]:text-[14px]  md:font-bold text-[#313030] md:mt-4">
                  Book Title-
                  <span className="text-[#fff] bg-[#118B50] rounded p-1 min-[320px]:text-[14px]">
                    {book.bookname}
                  </span>
                </span>
                <span className="md:text-2xl min-[320px]:text-[14px]  md:font-bold text-[#313030] md:mt-4">
                  Ratings-
                  <span className="text-[#fff] bg-[#118B50] rounded p-1 min-[320px]:text-[14px]">{`${book.ratings}*`}</span>
                </span>
                <span className="md:text-2xl min-[320px]:text-[14px]  md:font-bold text-[#313030] md:mt-4">
                  Price-
                  <span className="text-[#fff] bg-[#118B50] rounded p-1 min-[320px]:text-[14px]">
                    {book.price}
                  </span>
                </span>
                <span className="md:text-2xl min-[320px]:text-[14px]  md:font-bold text-[#313030] md:mt-4">
                  Description-
                  <span className="text-[#fff] bg-[#118B50] rounded p-1 min-[320px]:text-[14px]">
                    {book.description}
                  </span>
                </span>
              </div>
            </div>
          </>
        );
      })}
      <Footer />
    </>
  );
}
export default BrowseDetails;
