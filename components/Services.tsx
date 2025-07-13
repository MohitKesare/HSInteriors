import React from "react";

const Services = () => {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center ">
      <div className="w-[90%] h-[90%]   flex flex-col space-y-4">
        <div className="outfit-400-14 flex flex-col w-fit text-[#996830] ml-5 mt-4">
          OUR SERVICES
          <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
        </div>
        <div className="fira-code-600 leading-[80px] text-black ml-5">
          We bring craftsmanship, materials, and space together in{" "}
          <span className="fira-code-italic">perfect harmony</span>
        </div>
        <div className="h-[60%] w-full  mt-3 flex justify-evenly">
          {/* start here */}
          <div className="group relative w-[30%] h-full border-2 border-[#E6D8CC] rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white">
            {/* Expanding image */}
            <img
              src="/services-1.png"
              alt="Profile"
              className="
      absolute top-6 transition-all duration-300 ease-in-out
      rounded-[50%] w-24 h-24 object-cover z-10 m-5 group-hover:m-0
      group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:z-0"
            />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-end h-full p-6 text-center space-y-4">
              <h3 className="text-[#222] text-xl font-semibold text-start fira-code-32 group-hover:hidden">
                Thoughtful Interiors, Designed for Life
              </h3>
              <p className="text-gray-600 text-sm text-start outfit-400-16 group-hover:hidden">
                We create elegant, functional spaces tailored to your taste and
                lifestyle. From concept to layout, our designers bring your
                vision to life with timeless aesthetics and practical flow.
              </p>
            </div>
          </div>
          {/* end here */}
          {/* start here */}
          <div className="group relative w-[30%] h-full border-2 border-[#E6D8CC] rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white">
            {/* Expanding image */}
            <img
              src="/services-2.png"
              alt="Profile"
              className="
      absolute top-6 transition-all duration-300 ease-in-out
      rounded-[50%] w-24 h-24 object-cover z-10 m-5 group-hover:m-0
      group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:z-0"
            />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-end h-full p-6 text-center space-y-4">
              <h3 className="text-[#222] text-xl font-semibold text-start fira-code-32 group-hover:hidden">
                Thoughtful Interiors, Designed for Life
              </h3>
              <p className="text-gray-600 text-sm text-start outfit-400-16 group-hover:hidden">
                We create elegant, functional spaces tailored to your taste and
                lifestyle. From concept to layout, our designers bring your
                vision to life with timeless aesthetics and practical flow.
              </p>
            </div>
          </div>
          {/* end here */}
          {/* start here */}
          <div className="group relative w-[30%] h-full border-2 border-[#E6D8CC] rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white">
            {/* Expanding image */}
            <img
              src="/services-3.png"
              alt="Profile"
              className="
      absolute top-6 transition-all duration-300 ease-in-out
      rounded-[50%] w-24 h-24 object-cover z-10 m-5 group-hover:m-0
      group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:z-0"
            />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-end h-full p-6 text-center space-y-4">
              <h3 className="text-[#222] text-xl font-semibold text-start fira-code-32 group-hover:hidden">
                Thoughtful Interiors, Designed for Life
              </h3>
              <p className="text-gray-600 text-sm text-start outfit-400-16 group-hover:hidden">
                We create elegant, functional spaces tailored to your taste and
                lifestyle. From concept to layout, our designers bring your
                vision to life with timeless aesthetics and practical flow.
              </p>
            </div>
          </div>
          {/* end here */}
        </div>
        {/* <button>Lets Build Together</button> */}
      </div>
    </div>
  );
};

export default Services;
