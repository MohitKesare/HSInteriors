import AboutUs from "@/components/AboutPage/AboutUs";
import Process from "@/components/AboutPage/Process";
import Values from "@/components/AboutPage/Values";
import Footer from "@/components/Footer";
import Legacy from "@/components/Legacy";
import Navbar from "@/components/Navbar";
import Something from "@/components/ServicePage/Something";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative w-full flex flex-col">
      {/* Background Image */}
      <Image
        src="services-home.png"
        alt=""
        className="absolute top-0 left-0 w-full h-[60vh] object-cover z-0 "
      />
      {/* Optional dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/50 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 mb-15">
        {/* Transparent Navbar */}
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="pt-24 px-8 text-white max-w-5xl mx-auto flex items-center justify-center flex-col">
          <h1 className="fira-code-600 mt-10">About HS Marble Edge</h1>
          <p className="outfit-24 mt-4 text-center">
            Crafting Interiors and Stonework Excellence since 1922
          </p>
        </div>
      </div>
      <AboutUs />
      <Legacy />
      <Process />
      <Values />
      <Something />
      <Footer />
    </div>
  );
};

export default page;
