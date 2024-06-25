import React from 'react'

function Main() {
    return (
        <div><div className=" px-36 grid py-11 w-full   grid-cols-2 gap-14  justify-between">
            <img src="/header_pic.jpg" alt="" className='rounded-[60px]' />
            <div className="relative  h-[90%] py-10">
                <h1 className='text-[#3c8476] font-semibold text-3xl'>INTERGRATED DEVELOPMENT CENTER</h1>
                <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
            </div>
        </div>
            <div className=" px-36  py-11 w-full   ">
                <h1 className='text-[#3c8476] font-semibold text-3xl text-center'>TOP VALUES FOR YOU</h1>
                <div className="grid grid-cols-3 text-white gap-6 h-[50vh] py-10">
                    <div style={{ backgroundImage: "url(/header_pic.jpg)", backgroundSize: "cover" }} className='h-full w-full rounded-3xl'>      <div className='h-full w-full bg-[#4c57848a] flex justify-center items-center uppercase rounded-3xl'>Agriculture</div></div>
                    <div style={{ backgroundImage: "url(/header_pic.jpg)", backgroundSize: "cover" }} className='h-full w-full rounded-3xl'>      <div className='h-full w-full bg-[#4c57848a] flex justify-center items-center uppercase rounded-3xl'>Sports</div></div>
                    <div style={{ backgroundImage: "url(/header_pic.jpg)", backgroundSize: "cover" }} className='h-full w-full rounded-3xl'>      <div className='h-full w-full bg-[#4c57848a] flex justify-center items-center uppercase rounded-3xl'>insurance programs</div></div>
                </div>

            </div>
        </div>
    )
}

export default Main