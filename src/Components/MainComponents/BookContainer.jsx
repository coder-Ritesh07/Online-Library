

function BookContainer(props){
    return(
            <div id="books" className='bg-[#ddd8d8d0] md:w-[300px] sm:w-[260px] sm:h-[340px] min-[475px]:w-[220px] min-[475px]:h-[320px] min-[425px]:w-[250px] min-[425px]:h-[320px] min-[320px]:w-[250px] min-[320px]:h-[320px] md:h-[400px] rounded overflow-hidden hover:scale-95 transition md:mb-8 '>
                <div id="book-img">
                    <img src={props.famousBook.image} alt="" className='w-screen  md:h-[200px] sm:h-[160px] min-[475px]:h-[140px] min-[425px]:h-[140px] min-[320px]:h-[140px]'/>
                </div>
                <div id="author-name" className='flex flex-col flex-wrap items-center '>
                    <h1 className='md:text-[20px] sm:text-[16px] sm:font-semibold md:font-bold pl-2 text-[#222121]'>{props.famousBook.bookname}</h1>
                    <h1 className='md:text-xl sm:text-[15px] sm:font-semibold md:font-bold'>{props.famousBook.authorname}</h1>
                    <span className='md:text-xl md:font-bold sm:text-[16px] sm:font-semibold'>{`Ratings-${props.famousBook.ratings}*`}</span>
                </div>
                <div id="btn" className='flex justify-center sm:mt-5'>
                    <button className='rounded bg-[#118B50] p-2 hover:scale-105 transition md:font-semibold sm:font-semibold text-white md:text-[18px] sm:text-[17px] min-[475px]:mt-4 min-[425px]:mt-4'>view more</button>
                </div>
            </div>
            

    )
}
export default BookContainer;