import { sciFiBooks } from "../../../Utils/Sci-fiMokeData";
import Header from "../../MainComponents/Header";
import Footer from "../../MainComponents/Footer";
import { useParams } from "react-router-dom";
function SciFiDetails(){
    let booksid=useParams()
    let resdata=sciFiBooks.filter((book)=>book.id==booksid.id)
    return(
        <>
           <Header />
      {resdata.map((book) => {
        return (
          <>
            <div className="bg-[#7daf8cd4] h-full flex justify-center">
              <div className="my-0 mx-auto max-w-[90%] pt-8 flex flex-col items-center min-[320px]:my-[30px]">
                <img src={book.image} alt="Error img not Found" className="w-[300px] h-[250px] min-[320px]:w-[250px] min-[320px]:h-[200px]  rounded-md" />
                <span className="md:text-2xl min-[320px]:text-[14px] font-bold text-[#313030] mt-4">Author Name-<span className="text-[#fff] bg-[#118B50] rounded p-1 min-[320px]:text-[14px]" >{book.authorname}</span></span>
                <span className="md:text-2xl min-[320px]:text-[14px] font-bold text-[#313030] mt-4">Book Title-<span className="text-[#fff] bg-[#118B50] rounded p-1 min-[320px]:text-[14px]">{book.bookname}</span></span>
                <span className="md:text-2xl min-[320px]:text-[14px] font-bold text-[#313030] mt-4">Ratings-<span className="text-[#fff] bg-[#118B50] rounded p-1min-[320px]:text-[14px]" >{`${book.ratings}*`}</span></span>
                <span className="md:text-2xl min-[320px]:text-[14px] font-bold text-[#313030] mt-4">Price-<span className="text-[#fff] bg-[#118B50] rounded p-1 min-[320px]:text-[14px]">{book.price}</span></span>
                <span className="md:text-2xl min-[320px]:text-[14px] font-bold text-[#313030] mt-4">Description-<span className="text-[#fff] bg-[#118B50] rounded p-1 min-[320px]:text-[14px]">{book.description}</span></span>
              </div>
            </div>
          </>
        );
      })}
      <Footer/>
        </>
    )
}
export default SciFiDetails;