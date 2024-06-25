
function Header() {
    return (
        <div id="home" className=" px-36 flex h-[80vh] py-11 w-full   grid-cols-2 gap-14 items-center justify-between">
            <img src="/header_pic.jpg" alt="" className="h-[80%] " />
            <div className="relative  h-[90%] flex">
                <img src="/header_pic.jpg" className="rounded-[70px] shadow-lg shadow-[#00000058]" alt="" />
                <div className="w-[25%] translate-x-[-15%] shadow-lg translate-y-[10%] absolute bottom-0 bg-[#3c8476] aspect-square rounded-full"></div>
                <div className="w-[10%] translate-x-[105%] shadow-lg translate-y-[40%] shadow-[#00000058] absolute bottom-0 bg-white aspect-square rounded-full"></div>
            </div>
        </div>
    )
}

export default Header