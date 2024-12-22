import Header from "../Header";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCardbook } from "../../../Utils/BookSlice";
import { browseBook } from "../../../Utils/BrowseBookMokeData";
import { Link } from "react-router-dom";
function AddBook(){
    let disPatch=useDispatch()
    let [id,setId]=useState(browseBook.length);
    let [imgurl,setImgUrl]=useState('');
    let [bookname,setBookName]=useState('');
    let [authorname,setAuthorName]=useState('');
    let [rating,setRating]=useState('');
    let [price,setPrice]=useState('');
    let [desc,setDesc]=useState('')

    function handleAddBook(event){
        event.preventDefault();
        let newbook={
                id:id,
                image:imgurl,
                bookname:bookname,
                authorname:authorname,
                ratings:rating,
                price:price,
                description:desc
        }
        disPatch(addCardbook(newbook))
        setId(id+1)
        setImgUrl('')
        setBookName('')
        setAuthorName('')
        setRating('')
        setPrice('')
        setDesc('')
    }
    return(
        <>
        <div className="bg-[#7daf8cd4]">
            <Header/>
        <form className="m-5 flex flex-col items-center justify-center min-[320px]:m-[20px] ">
            <div id="img-url" className="m-4">
                <label htmlFor="image" className="text-black  text-2xl font-bold mr-3 min-[320px]:text-[20px]" >Enter Your Image Url</label>
                <input type="text" id="image" placeholder="Enter Url" required onChange={(e)=>setImgUrl(e.target.value)}  className="bg-[#fff] min-[320px]:w-[200px] min-[320px]:h-[30px]   focus:outline-none rounded md:w-80 md:h-10 text-xl font-semibold pl-2 "/>
            </div>
            <div id="bookname-section" className="m-4">
                <label htmlFor="bookname" className="text-black  text-2xl font-bold mr-3 min-[320px]:text-[20px]">Enter Your Book Title</label>
                <input type="text" name="bookname" id="bookname" placeholder="Enter Book Title" required onChange={(e)=>setBookName(e.target.value)} className="bg-[#fff] min-[320px]:w-[200px] min-[320px]:h-[30px] focus:outline-none rounded md:w-80 md:h-10 text-xl font-semibold pl-2 "/>
            </div>
            <div id="author-section" className="m-4">
                <label htmlFor="authorname" className="text-black  text-2xl font-bold mr-3 min-[320px]:text-[20px]" >Enter Your Author Name</label>
                <input type="text" name="author" id="authorname" placeholder="Enter Author Name" required onChange={(e)=>setAuthorName(e.target.value)}  className="bg-[#fff] min-[320px]:w-[200px] min-[320px]:h-[30px]  focus:outline-none rounded md:w-80 md:h-10 text-xl font-semibold pl-2 "/>
            </div>
            <div id="rating-section" className="m-4">
                <label htmlFor="rating" className="text-black  text-2xl font-bold mr-3 min-[320px]:text-[20px]" >Enter Book Rating</label>
                <input type="text" name="ratings" id="rating" placeholder="Enter Rating" required onChange={(e)=>setRating(e.target.value)} className="bg-[#fff] min-[320px]:w-[200px] min-[320px]:h-[30px]  focus:outline-none rounded md:w-80 md:h-10 text-xl font-semibold pl-2 "/>
            </div>
            <div id="price-section" className="m-4">
                <label htmlFor="price" className="text-black  text-2xl font-bold mr-3 min-[320px]:text-[20px]" >Enter Your Book Price</label>
                <input type="text" name="price" id="price" placeholder="Enter Price" required onChange={(e)=>setPrice(e.target.value)} className="bg-[#fff] min-[320px]:w-[200px] min-[320px]:h-[30px] focus:outline-none rounded md:w-80 md:h-10 text-xl font-semibold pl-2 "/>
            </div>
            <div id="desc-section" className="m-4" >
                <label htmlFor="description" className="text-black  text-2xl font-bold mr-3 min-[320px]:text-[20px]" >Enter Book Description</label>
                <input type="text" name="desc" id="description" placeholder="Enter Description" required onChange={(e)=>setDesc(e.target.value)} className="bg-[#fff] min-[320px]:w-[200px] min-[320px]:h-[30px] focus:outline-none rounded md:w-80 md:h-10 text-xl font-semibold pl-2 "/>
            </div>
            <div id="btn" className="m-5">
                <Link to="/browse">
                <button onClick={handleAddBook} className="text-2xl min-[320px]:text-[20px] font-bold border rounded-md hover:scale-105 transition p-2 bg-white text-[#118B50]">Add Book</button>
                </Link>
            </div>
        </form>
        <Footer/>
        </div>
        </>
    )
}
export default AddBook;