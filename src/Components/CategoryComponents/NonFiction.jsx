import Header from "../MainComponents/Header";
import { nonFictionBooks } from "../../Utils/Non-FictionMokeData";
import Footer from "../MainComponents/Footer";
import { Link } from "react-router-dom";
function NonFiction(){
    return(
        <>
            <Header />
      <div className="bg-[#7daf8cd4]">

      <div className=" h-full pt-8 pb-8 my-0 mx-auto max-w-[90%] flex flex-wrap gap-5 justify-center">
        {nonFictionBooks.map((book) => {
          return (
            <>
             <Link to={`/nonfiction/book/${book.id}`}>
              <div className=" h-full ">
                <div
                  id="books"
                  className="bg-[#ddd8d8d0] md:w-[310px] md:h-[450px] sm:w-[260px] sm:h-[370px] min-[475px]:w-[210px] min-[475px]:h-[340px] min-[425px]:w-[250px] min-[425px]:h-[320px] min-[320px]:w-[250px] min-[320px]:h-[320px] rounded overflow-hidden hover:scale-95 transition mb-8"
                >
                  <div id="book-img">
                    <img src={book.image} alt="" className="w-screen md:h-[200px] sm:h-[160px] min-[475px]:h-[140px] min-[425px]:h-[140px] min-[320px]:h-[140px]" />
                  </div>
                  <div
                    id="author-name"
                    className="flex flex-col flex-wrap items-center "
                  >
                    <h1 className="md:text-[20px] sm:text-[16px] sm:font-semibold md:font-bold pl-2 text-[#222121] min-[475px]:text-[14px] min-[475px]:font-[400px]">
                      {book.bookname}
                    </h1>
                    <h1 className="md:text-xl sm:text-[15px] sm:font-semibold md:font-bold min-[475px]:text-[14px] min-[475px]:font-semibold">{book.authorname}</h1>
                    <span className="md:text-xl md:font-bold sm:text-[15px] sm:font-semibold min-[475px]:text-[14px] min-[475px]:font-semibold">{`Ratings-${book.ratings}*`}</span>
                  </div>
                  <div id="btn" className="flex justify-center mt-5">
                    <button className="rounded bg-[#118B50] p-2 hover:scale-105 transition font-semibold text-white md:text-[18px] sm:text-[17px] min-[475px]:font-semibold min-[475px]:text-[16px]">
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
    )
}
export default NonFiction;