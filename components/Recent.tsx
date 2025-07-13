import React from "react";

const RecentWork = () => {
  return (
    <div className="h-fit w-screen bg-white flex  flex-col items-center justify-center p-10">
      <div className="h-[90%] w-[90%] b space-y-7 mt-20">
        <div className="outfit-400-14 flex flex-col w-fit text-[#996830] ml-5 mt-4">
          RECENT WORKS
          <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
        </div>
        <div className="fira-code-600 leading-[80px] text-black ml-5">
          A Glimpse into Our <br />
          <span className="fira-code-italic">Craftmanship</span>
        </div>
        <div className="flex h-[150vh] justify-evenly">
          <div className="h-full w-[48%]  flex flex-col space-y-3">
            {/* start here */}

            <div className="relative group h-[55%] w-full overflow-hidden">
              <img
                src="/recent-work-1.png"
                alt=""
                className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-end  items-start text-white px-4 text-start">
                <h3 className="fira-code-400 text-White text-start">
                  Luxe Apartment Interior
                  <br />
                  --Mumbai
                </h3>
                <p className="outfit-400-20 text-[#E6D8CC] mb-10 text-start">
                  A modern 3BHK space tranformed with minimalist interior
                  design, Italian marble flooring, and warm ambient lighting.
                </p>
              </div>
            </div>
            <div className="relative group h-[45%] w-full overflow-hidden">
              <img
                src="/recent-work-3.png"
                alt=""
                className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-end items-start text-white px-4 text-start">
                <h3 className="fira-code-400 text-White">
                  Hilton Garden Interior <br /> --Noida
                </h3>
                <p className="outfit-400-20 text-[#E6D8CC] mb-10 text-start">
                  A modern 3BHK space tranformed with minimalist interior
                  design, Italian marble flooring, and warm ambient lighting.
                </p>
              </div>
            </div>

            {/* end here */}
          </div>
          <div className="h-full w-[48%]  flex flex-col space-y-3">
            <div className="relative group h-[45%] w-full overflow-hidden">
              <img
                src="/recent-work-2.png"
                alt=""
                className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-end items-start text-white px-4 text-start">
                <h3 className="fira-code-400 text-White">
                  Galaxy Apartment Innterior <br /> --Pune
                </h3>
                <p className="outfit-400-20 text-[#E6D8CC] mb-10 text-start">
                  A modern 3BHK space tranformed with minimalist interior
                  design, Italian marble flooring, and warm ambient lighting.
                </p>
              </div>
            </div>
            <div className="relative group h-[55%] w-full overflow-hidden">
              <img
                src="/recent-work-4.png"
                alt=""
                className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-end items-start text-white px-4 text-start">
                <h3 className="fira-code-400 text-White text-start">
                  Selerio Dune Interior <br />
                  --Pune
                </h3>
                <p className="outfit-400-20 text-[#E6D8CC] mb-10 text-start">
                  A modern 3BHK space tranformed with minimalist interior
                  design, Italian marble flooring, and warm ambient lighting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
