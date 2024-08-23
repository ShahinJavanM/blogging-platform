// import React from "react";
"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navIsVisible, setNavIsVisible] = useState<boolean>(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <header className=" container mx-auto px-5 flex justify-between py-4 items-center z-50">
      <div>
        <Link href={"/"} className=" font-bold  text-xl cursor-pointer">
          Blogging Platform
        </Link>
      </div>
      <div className="lg:hidden z-50">
        {navIsVisible ? (
          <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
        )}
      </div>
      <nav
        className={`${navIsVisible ? "right-0" : "right-full"}
        "transition-all duration-300 mt-[56pxz lg:mt-0 [49] bg-primary lg:bg-transparent  flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed top-0 bottom-0 -right-full lg:static flex gap-x-9 items-center`}
      >
        <ul className="z-50 gap-y-5 items-center flex flex-col lg:flex-row font-semibold gap-x-2">
          <li>
            <Link
              className=" text-lg font-bold hover:text-orange-700 p-2  transition-all duration-300"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            {/* <Link
              className=" text-lg font-bold hover:text-orange-700 p-2  transition-all duration-300"
              href={"/blogs"}
            >
              Blogs
            </Link> */}
          </li>
        </ul>
        <Link
          href="/create-post"
          className="px-6 py-2.5 rounded-md bg-blue-900 text-white hover:bg-blue-400 transition-all duration-300"
        >
          Create Post
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
