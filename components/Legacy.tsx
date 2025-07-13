import React from "react";

const Legacy = () => {
  return (
    <div className="h-60 w-full bg-[#2C2C2C] flex items-center justify-center flex-col space-y-5">
      <div className="w-[70%] flex flex-col  h-fit mt-5">
        <div className="fira-code-legacy text-[#969797]  w-fit mx-10">
          Our Legacy in numbers
          <div className="w-[30%] h-[1.2px] bg-[#969797] mt-2"></div>
        </div>
      </div>
      <div className="w-[70%] flex justify-evenly">
        <div className="flex items-center justify-center   space-x-2">
          <img src="/legacy-number-1.png" alt="" />
          <div className="flex flex-col items-start justify-center space-x-2">
            <h3 className="outfit">500+</h3>
            <p className="outfit-400-16">Projects completed</p>
          </div>
        </div>
        <div className="flex items-center justify-center   space-x-2">
          <img src="/legacy-number-2.png" alt="" />
          <div className="flex flex-col items-start justify-center space-x-2">
            <h3 className="outfit">100+</h3>
            <p className="outfit-400-16">Tile & stone Options</p>
          </div>
        </div>
        <div className="flex items-center justify-center   space-x-2">
          <img src="/legacy-number-3.png" alt="" />
          <div className="flex flex-col items-start justify-center space-x-2">
            <h3 className="outfit">200+</h3>
            <p className="outfit-400-16">Happy Clients</p>
          </div>
        </div>
        <div className="flex items-center justify-center   space-x-2">
          <img src="/legacy-number-4.png" alt="" />
          <div className="flex flex-col items-start justify-center space-x-2">
            <h3 className="outfit">1992</h3>
            <p className="outfit-400-16">Established In</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
