import "./globals.css";
import React from "react";
import Header from "@/components/Header/page";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center overflow-hidden ">
      <Header />
      <div className=" flex flex-row h-[80%] mx-auto max-w-[1600px] pt-10">
        <div className="w-full lg:w-2/3 flex flex-col lg:text-left mb-4 lg:ml-[80px]">
          <h1 className="font-libre text-[#000000] text-2xl md:text-4xl lg:text-5xl font-bold tracking-normal mb-1 md:mb- lg:mb-5 pt-10 lg:pt-20">
            IMPECCABLE<br/>
            CRAFTSMANSHIP AND<br/>
            FINESSE
          </h1>

          <p className="font-libre text-[#787054] leading-[49.35px] tracking-tighter text-start mb-6 lg:mb-10 h-auto lg:h[147px] text-[30px] mt-0 font-medium max-w-[902] my-2 lg:my-4">
            An example of intricate workmanship and detail, elegant
            <br /> necklace and long and short chains form a part of our
            <br /> desirable collection.
          </p>

          <button className="bg-[#A29875] text-[#ffffff] font-[Libre-bodoni] w-[220px] h-[58] rounded-[10px] text-[28px] hover:bg-[#6d664a] transition duration-500">
            Explore Now
          </button>
        </div>

        <div className="relative w-full lg:w-1/3 flex justify-center items-center mt-1 lg:mt-2">
          <div className="relative h-auto">
            <div className="m-[5%] absolute inset-0 border-[1px] border-[#FFFFFF] rounded-[50px_0px_50px_0px] lg:rounded-[150px_0px_150px_0px]"></div>

            <img
              src="/images/slider-1.jpg.svg"
              alt="Jewelry Display"
              className="object-contain rounded-[50px_0px_50px_0px] lg:rounded-[150px_0px_150px_0px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
