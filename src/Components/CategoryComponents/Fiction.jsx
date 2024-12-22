import Header from "../MainComponents/Header";
import { fictionbooks } from "../../Utils/FictionMokeData";
import Footer from "../MainComponents/Footer";
import { Link } from "react-router-dom";
function Fiction() {
 
  return (
    <>
      <Header />
      <div className="bg-[#7daf8cd4]">

      <div className=" h-full pt-8 pb-8 my-0 mx-auto max-w-[90%] flex flex-wrap gap-5 justify-center">
        {fictionbooks.map((book) => {
          return (
            <>
            <Link to={`/fiction/book/${book.id}`}>

              <div className=" h-full ">
                <div
                  id="books"
                  className="bg-[#ddd8d8d0] md:w-[300px] sm:w-[260px] sm:h-[340px] md:h-[400px] min-[475px]:w-[210px] min-[475px]:h-[320px] min-[425px]:w-[250px] min-[425px]:h-[320px] min-[320px]:w-[250px] min-[320px]:h-[320px] rounded overflow-hidden hover:scale-95 transition mb-8"
                >
                  <div id="book-img">
                    <img src={book.image} alt="" className="w-screen md:h-[200px] sm:h-[160px] min-[475px]:h-[140px]  min-[425px]:h-[140px] min-[320px]:h-[140px]" />
                  </div>
                  <div
                    id="author-name"
                    className="flex flex-col flex-wrap items-center "
                  >
                    <h1 className="md:text-[20px] sm:text-[16px] md:font-bold sm:font-semibold pl-2 text-[#222121]">
                      {book.bookname}
                    </h1>
                    <h1 className="md:text-xl sm:text-[15px] sm:font-semibold md:font-bold">{book.authorname}</h1>
                    <span className="md:text-xl sm:text-[15px] sm:font-semibold md:font-bold">{`Ratings-${book.ratings}*`}</span>
                  </div>
                  <div id="btn" className="flex justify-center mt-5">
                    <button className="rounded bg-[#118B50] p-2 hover:scale-105 transition font-semibold text-white md:text-[18px] sm:text-[16px]">
                      view more
                    </button>
                  </div>
                </div>
              </div>

            </Link>
            </>
          );
        })}
      </div>
      </div>
      <Footer/>
    </>
  );
}
export default Fiction;
