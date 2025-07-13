import React from "react";
import Image from "next/image";

const Process = () => {
  return (
    <div className="h-[120vh] w-full  bg-white flex items-center justify-center">
      <div className="h-[90%] w-[90%]  flex justify-evenly">
        <div className="w-[50%] flex flex-col justify-evenly">
          <div className="h-[30%] w-full  flex space-x-10">
            <div className="flex flex-col ml-4 justify-center items-center">
              <Image
                src="process-1.png"
                alt=""
                className="h-[10vh]  w-[8vw] "
              />
              <div className="h-full w-[2px] bg-[#C4A386] mt-4" />
            </div>
            <div className="flex flex-col ">
              <p className="outfit-400-20 text-[#7C7C7C]">Step 1</p>
              <h2 className="fira-code-400 text-[#2C2C2C]">Design Planning</h2>
              <p className="outfit-400-20 text-[#7c7c7c] w-[80%]">
                We begin by understanding your vision, space, and requirements.
                Through personalized consultation, we lay the foundation for the
                perfect outcome.
              </p>
            </div>
          </div>
          <div className="h-[30%] w-full  flex space-x-10">
            <div className="flex flex-col ml-4 justify-center items-center">
              <Image
                src="process-2.png"
                alt=""
                className="h-[10vh]  w-[8vw] "
              />
              <div className="h-full w-[2px] bg-[#C4A386] mt-4" />
            </div>
            <div className="flex flex-col ">
              <p className="outfit-400-20 text-[#7C7C7C]">Step 2</p>
              <h2 className="fira-code-400 text-[#2C2C2C]">Design & Select</h2>
              <p className="outfit-400-20 text-[#7c7c7c] w-[80%]">
                Our experts help you choose the ideal materials—marble, granite,
                tiles—and curate a design that blends aesthetics with function.
              </p>
            </div>
          </div>
          <div className="h-[30%] w-full  flex space-x-10">
            <div className="flex flex-col ml-4 justify-center items-center">
              <Image
                src="process-3.png"
                alt=""
                className="h-[10vh]  w-[8vw] "
              />
              <div className="h-full w-[2px] bg-[#C4A386] mt-4" />
            </div>
            <div className="flex flex-col ">
              <p className="outfit-400-20 text-[#7C7C7C]">Step 3</p>
              <h2 className="fira-code-400 text-[#2C2C2C]">Build & Deliver</h2>
              <p className="outfit-400-20 text-[#7c7c7c] w-[80%] ">
                From precise fittings to polished finishes, we bring your space
                to life with unmatched craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col  space-y-5">
          <div className="outfit-400-20 flex flex-col w-fit text-[#996830] ml-5 mt-10">
            Our Process
            <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
          </div>
          <div className="fira-code-600 leading-[80px] text-black ml-5 mt-5">
            How We Bring Your{" "}
            <span className="fira-code-italic">Vision To Life</span>
          </div>
          <p className="text-[#444444] ml-6 pr-5 outfit-400-20 w-[90%]">
            HS Marble Edge is a legacy built over a century of dedication to
            interior craftsmanship. Since 1922, we&apos;ve been creating spaces that
            blend beauty with precision — offering expert services in interior
            design, tile work, marble and granite fittings. With a commitment to
            quality and timeless aesthetics, we&apos;ve earned the trust of
            homeowners, architects, and builders alike.
          </p>
          <p className="text-[#444444] ml-6 pr-5 outfit-400-20 w-[90%]">
            HS Marble Edge is a legacy built over a century of dedication to
            interior craftsmanship. Since 1922, we&apos;ve been creating spaces that
            blend beauty with precision — offering expert services in interior
            design, tile work, marble and granite fittings. With a commitment to
            quality and timeless aesthetics, we&apos;ve earned the trust of
            homeowners, architects, and builders alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
