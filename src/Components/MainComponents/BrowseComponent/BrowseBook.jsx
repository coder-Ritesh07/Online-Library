import Header from "../Header";
import Footer from "../Footer";
import SearchBook from "./SearchBook";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export function BrowseBook() {
  let [updatedata, setUpdate] = useState([]);
  updatedata=useSelector((store)=>store.card.books)
   function getFilterdata(filterdata) {
     setUpdate(filterdata);
    // console.log(filterdata)
  }
  // console.log(updatedata)

  return (
      <div className="bg-[#7daf8cd4] h-full">
        <Header />
        <SearchBook filterdata={getFilterdata} />
        <div className=" md:my-0 sm:my-7 min-[475px]:my-7 min-[425px]:my-7 min-[320px]:my-7 mx-auto max-w-[90%]   flex flex-wrap sm:gap-4 min-[475px]:gap-2 min-[425px]:gap-3 min-[320px]:gap-3 justify-center ">
          {updatedata.map((book) => {
            return (
              <>
                <Link to={`/browse/book/${book.id}`}>
                <div id="browse-books">
                  <div
                    id="books"
                    className="bg-[#ddd8d8d0] md:w-[300px] md:h-[400px] min-[475px]:w-[200px] min-[475px]:h-[320px] min-[425px]:w-[250px] min-[425px]:h-[320px] min-[320px]:w-[250px] min-[320px]:h-[320px] sm:w-[260px] sm:h-[340px] rounded overflow-hidden hover:scale-95 transition md:mb-8"
                  >
                    <div id="book-img">
                      <img src={book.image} alt="" className="w-screen md:h-52 sm:h-[160px] min-[475px]:h-[140px] min-[425px]:h-[140px] min-[320px]:h-[140px]" />
                    </div>
                    <div
                      id="author-name"
                      className="flex flex-col flex-wrap items-center "
                    >
                      <h1 className="md:text-[20px] min-[475px]:text-[16px] min-[475px]:font-semibold sm:font-semibold sm:text-[16px] md:font-bold pl-2 text-[#222121]">
                        {book.bookname}
                      </h1>
                      <h1 className="md:text-xl sm:text-[15px] min-[475px]:text-[15px] min-[475px]:font-semibold sm:font-semibold md:font-bold">{book.authorname}</h1>
                      <span className="md:text-xl  sm:text-[15px] min-[475px]:text-[15px] min-[475px]:font-bold sm:font-semibold md:font-bold">
                        `{`Ratings-${book.ratings}`}
                      </span>
                    </div>
                    <div id="btn" className="flex justify-center mt-5">
                      <button className="rounded bg-[#118B50] p-2 hover:scale-105 transition md:font-semibold sm:font-semibold min-[475px]:font-semibold text-white md:text-[18px]">
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
        <Footer />
      </div>
  );
}

