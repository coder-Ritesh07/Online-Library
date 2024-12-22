function Footer(){
    return(
        <footer className="bg-[#118B50] md:h-28 sm:h-20 min-[475px]:h-[70px] min-[425px]:h-[70px] flex justify-between items-center md:p-5 sm:p-4 min-[475px]:p-2 min-[425px]:p-2 min-[320px]:p-1 min-[320px]:h-[60px]">
            <div>
              <h1 className="md:text-[28px] sm:text-[24px] min-[475px]:text-[20px] min-[475px]:font-semibold text-white sm:font-semibold  md:font-bold min-[425px]:font-bold min-[425px]:text-[18px] min-[320px]:text-[14px] min-[320px]:font-semibold">Online <span className="bg-white rounded text-[#118B50] md:text-[24px] sm:text-[20px] min-[475px]:text-[20px] min-[425px]:text-[18px] min-[425px]:font-semibold min-[425px]:p-1 min-[475px]:font-semibold min-[475px]:p-1 min-[320px]:p-[2px] min-[320px]:text-[14px] min-[320px]:font-semibold sm:p-2 md:font-bold sm:font-semibold md:p-2"> Library</span></h1>
            </div>
            <div>
                <span className="md:text-2xl sm:text-xl min-[475px]:text-[16px] min-[475px]:font-semibold min-[425px]:text-[15px] min-[425px]:font-semibold min-[320px]:font-semibold min-[320px]:text-[14px] sm:font-semibold text-white md:font-bold">All Rights Reserved</span>
            </div>
        </footer>
    )
}
export default Footer;