import React from "react";

function Footer() {
  return (
    <div id="news">
      <h1 className="text-[#3c8476] font-semibold text-3xl text-center">
        NEWS & NOTIFICAION
      </h1>
      <div className=" px-36 grid py-11 w-full   grid-cols-2 gap-14 items-center justify-between">
        <img src="/header_pic.jpg" alt="" className="rounded-[60px]" />
        <div className="relative grid gap-6   h-[90%] py-10">
          <div className="relative w-full bg-[#3c8476] px-10 py-5 text-white rounded-3xl text-[15px]">
            <div className="absolute bg-green-700 h-[20%] aspect-square rounded-full right-0 top-0 translate-x-[0%] translate-y-[-40%]"></div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b
          </div>
          <div className="relative w-full bg-[#3c8476] px-10 py-5 text-white rounded-3xl text-[15px]">
            <div className="absolute bg-green-700 h-[20%] aspect-square rounded-full right-0 top-0 translate-x-[0%] translate-y-[-40%]"></div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b
          </div>
          <div className="relative w-full bg-[#3c8476] px-10 py-5 text-white rounded-3xl text-[15px]">
            <div className="absolute bg-green-700 h-[20%] aspect-square rounded-full right-0 top-0 translate-x-[0%] translate-y-[-40%]"></div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b
          </div>
        </div>
      </div>
      <div className=" w-full bg-black  ">
        <div className="grid grid-cols-3 text-white gap-6 h-[50vh] py-10">
          <div
            style={{
              backgroundImage: "url(/header_pic.jpg)",
              backgroundSize: "cover",
            }}
            className="h-full w-full "
          >
          </div>
            <a href="#news" className="text-[#3c8476]">NEWS AND NOTIFICATION</a>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
