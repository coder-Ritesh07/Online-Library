import { useState } from "react";
import { browseBook } from "../../../Utils/BrowseBookMokeData";
import { Provider } from "react-redux";
import appStore from "../../../Utils/AppStore";
function SearchBook(props){
    let [searchdata,setSearchData]=useState("")
    let [filterbooks,setFilterBooks]=useState(browseBook)
    function handleSearch() {
        filterbooks = browseBook.filter((book) => {
          return (
            book.authorname.toLowerCase().includes(searchdata.toLowerCase()) || 
            book.bookname.toLowerCase().includes(searchdata.toLowerCase())
          );
        });
        setSearchData("")
        setFilterBooks(filterbooks)
      }
      props.filterdata(filterbooks)
    return (
        <Provider store={appStore}>
         <div id="search-book" className="flex justify-center md:m-10 sm:m-7 min-[475px]:m-[20px] min-[425px]:m-[20px] min-[320px]:m-[20px] items-center">
                <input type="text" placeholder="Search Your Books" name="searchbook" value={searchdata} onChange={((e)=>setSearchData(e.target.value))}  className="md:w-80 sm:w-72 min-[475px]:w-[270px] min-[425px]:w-[250px] min-[425px]:h-[30px] sm:h-10 md:h-10 min-[475px]:h-[30px] min-[475px]:mr-6 min-[425px]:mr-5 md:mr-7 sm:mr-6 rounded-md focus:outline-none pl-2 text-xl min-[475px]:text-[16px] md:font-bold sm:font-[600] min-[475px]:font-[600px] min-[425px]:font-[600px] min-[425px]:text-[16px]min-[320px]:text-[14px] min-[320px]:font-[600px] min-[320px]:h-[35px] min-[320px]:w-[190px] min-[320px]:mr-5 "/>
                <button className="md:text-2xl sm:text-xl min-[475px]:text-[18px] min-[425px]:text-[17px] min-[425px]:font-bold min-[475px]:font-bold md:font-bold sm:font-bold border rounded-md hover:scale-105 transition md:py-2 sm:py-[6px] min-[475px]:py-[6px] min-[425px]:py-[5px] min-[425px]:px-3 min-[320px]:py-[5px] min-[320px]:px-3 min-[320px]:font-semibold min-[475px]:px-3 md:px-4 sm:px-3 bg-[#118B50] text-white border-none" onClick={handleSearch}>Search</button>
            </div>
        </Provider>
    )
}
export default SearchBook;