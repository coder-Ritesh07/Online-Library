import BookContainer from "./BookContainer";
import Header from "./Header";
import { famousBooks } from "../../Utils/FamousMokeData";
import BookCategory from "./BookCategory";
import WellcomeMsg from "./WellcomeMsg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="h-full bg-[#7daf8cd4]">
      <Header />
      <WellcomeMsg />
      <div className="flex sm:flex-col min-[475px]:flex-col min-[425px]:flex-col min-[320px]:flex-col  md:flex-row">
        <BookCategory />
        <div className="flex flex-wrap md:gap-4 sm:my-5 min-[475px]:my-5 min-[425px]:my-5 min-[320px]:my-5 sm:gap-4 min-[475px]:gap-4 min-[425px]:gap-4 min-[320px]:gap-4  justify-center">
          {famousBooks.map((book) => {
            return (
              <Link to={`book/${book.id}`}>
                <BookContainer famousBook={book} />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default HomePage;
