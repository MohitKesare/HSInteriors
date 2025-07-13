import React from "react";
import Image from "next/image";

const MarbleInstallations = () => {
  return (
    <div className="h-[100vh] w-full  bg-white flex justify-center items-center  ">
      <div
        className="h-[90%] w-[90%] flex justify-evenly mt-20
      "
      >
        <div className="flex flex-col w-[50%] h-[90%] items-center">
          <div className="flex justify-evenly w-[90%] h-[50%] space-x-5   items-center rounded">
            <div
              className="relative rounded-md overflow-hidden w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer
            
            "
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
                <h4 className="fira-code-20 w-[80%]">
                  Material Sourcing $ Selection
                </h4>
                <p className="outfit-400-16 w-[90%]">
                  We provide a curated selection of premium Indian and imported
                  stones tailored to your project — ensuring consistency in
                  quality, pattern, and tone.
                </p>
              </div>
              <Image
                src={`interior-1.jpg`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
              />
            </div>
            <div className="relative rounded-md overflow-hidden w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out  border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
                <h4 className="fira-code-20 w-[80%]">
                  Precision Cutting & Edging
                </h4>
                <p className="outfit-400-16 w-[90%]">
                  Using advanced machinery and hand-finishing, we craft custom
                  cuts, edges, and finishes — including beveled, bullnose, and
                  honed textures.
                </p>
              </div>
              <Image
                src={`interior-2.jpg`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
              />
            </div>
          </div>
          <div className="flex justify-evenly w-[90%]  space-x-5  h-[50%]  items-center">
            <div
              className="relative rounded-md overflow-hidden w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer
            "
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
                <h4 className="fira-code-20 w-[80%]">
                  Professional Installations
                </h4>
                <p className="outfit-400-16 w-[90%]">
                  Our expert team handles site-level fitting, joint sealing, and
                  levelling — ensuring a clean, durable, and elegant final
                  result.
                </p>
              </div>
              <Image
                src={`interior-3.jpg`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
              />
            </div>
            <div className="relative rounded-md overflow-hidden w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
                <h4 className="fira-code-20 w-[80%]">
                  Maintenance & polishing
                </h4>
                <p className="outfit-400-16 w-[90%]">
                  We offer post-installation polishing and care guidelines to
                  retain natural sheen and strength, with optional long-term
                  support plans.
                </p>
              </div>
              <Image
                src={`interior-4.jpg`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start h-full w-[50%]">
          <div className="outfit-400-14 flex flex-col w-fit text-[#996830] ml-5 mt-4">
            2. Marble & Granite Installations
            <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
          </div>
          <div className="ml-5">
            <h2 className="fira-code text-[#2C2C2C]">
              Stones That{" "}
              <span
                className="
          fira-code-italic text-black"
              >
                Speaks for itself
              </span>
            </h2>
          </div>
          <div className="ml-5">
            <p className="outfit text-[#444444] mt-4 w-[90%]">
              With over a century of stone craftsmanship, we source, cut, and
              install world-class marble and granite with unmatched precision.
              With over a century of stone craftsmanship, we source, cut, and
              install world-class marble and granite with unmatched precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarbleInstallations;
