import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" w-full  h-[13vh] z-50 flex items-center justify-between px-8 py-4 bg-transparent border-b border-b-[#FFFFFF45]">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        <Link href="/">
          <Image src="/logo.svg" alt="" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className="text-white hover:text-blue-300 transition outfit-400-16 "
        >
          Home
        </Link>
        <Link
          href="/services"
          className="text-white hover:text-blue-300 transition outfit-400-16 "
        >
          Services
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-blue-300 transition outfit-400-16 "
        >
          About Us
        </Link>
        <Link
          href="/work"
          className="text-white hover:text-blue-300 transition outfit-400-16 "
        >
          Our Work
        </Link>
        <Link href="/contact">
          <button className=" outfit-400-16 ml-4 px-4 py-2  space-x-2 bg-[#996830] cursor-pointer text-white rounded-none hover:bg-[#000033] hover:text-white transition flex items-center justify-center ">
            <p>CONTACT US</p>
            <GoArrowUpRight />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
