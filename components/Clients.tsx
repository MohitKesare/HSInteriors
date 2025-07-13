"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="py-20 flex flex-col justify-center items-center  bg-[#2C2C2C]"
    >
      <div className="w-[90%] h-[30vh] flex">
        <div className="w-[50%]  flex flex-col justify-evenly ml-10">
          <div className="outfit-400-20 text-[#E6D8CC] w-fit p-3">
            What Our Clients say
            <div className="w-[85%] h-[1.2px] bg-[#996830] mt-1"></div>
          </div>
          <div className="fira-code-400 text-white leading-[55px] mt-4 p-3">
            Hear from those who <br />{" "}
            <span className="fira-code-400-italic">trusted our craft</span>
          </div>
        </div>
        <div className="w-[50%]  flex items-center justify-center text-start">
          <div className="text-[#E6D8CC] outfit-400-20 w-fit ml-5 mt-4">
            We take pride in every project we deliver — but nothing speaks
            louder than the words of our clients. Here’s what they have to say
            about our craftsmanship, service, and lasting impact on their spaces
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.Image}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <Image
                  src={company.nameImage}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Clients;
