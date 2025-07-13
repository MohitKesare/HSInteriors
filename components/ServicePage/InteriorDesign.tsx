import React from "react";
import Image from "next/image";

const InteriorDesign = () => {
  return (
    <div className="h-[100vh] w-full  bg-white flex justify-center items-center  ">
      <div
        className="h-[90%] w-[90%] flex justify-evenly mt-20
      "
      >
        <div className="flex flex-col items-start h-full w-[50%]">
          <div className="outfit-400-14 flex flex-col w-fit text-[#996830] ml-5 mt-4">
            1. INTERIOR DESIGN
            <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
          </div>
          <div className="ml-5">
            <h2 className="fira-code text-[#2C2C2C]">
              Transforming Spaces into{" "}
              <span
                className="
          fira-code-italic text-black"
              >
                Timeless Stories
              </span>
            </h2>
          </div>
          <div className="ml-5">
            <p className="outfit text-[#444444] mt-4 w-[90%]">
              Our in-house design team collaborates closely with clients to
              craft interiors that balance function and emotion. From initial
              moodboards to final fittings — we guide every step. Our in-house
              design team collaborates closely with clients to craft interiors
              that balance function and emotion. From initial moodboards to
              final fittings — we guide every step.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[50%] h-[90%] items-center">
          <div className="flex justify-evenly w-[90%] h-[50%] space-x-5   items-center rounded">
            <div
              className="relative rounded-md overflow-hidden w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer
            
            "
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
                <h4 className="fira-code-20 w-[80%]">
                  Spatial Planning & Layout Design
                </h4>
                <p className="outfit-400-16 w-[90%]">
                  We analyze your space to create optimal layouts that align
                  with your lifestyle or brand needs — ensuring efficient flow,
                  functionality, and aesthetics.
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
                  Furniture & Décor Curation
                </h4>
                <p className="outfit-400-16 w-[90%]">
                  From modular furniture to custom pieces, we curate or design
                  furnishings that complete your space — with attention to
                  scale, texture, and comfort.
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
                  Material & Color Consultation
                </h4>
                <p className="outfit-400-16 w-[90%]">
                  From marble finishes to wall paints, we help you choose
                  materials and color palettes that reflect your vision and
                  endure through trends.
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
                  Lighting & Ambience Design
                </h4>
                <p className="outfit-400-16 w-[90%]">
                  We design layered lighting systems — ambient, task, and accent
                  — to shape mood, improve usability, and highlight key
                  architectural elements.
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
      </div>
    </div>
  );
};

export default InteriorDesign;
