"use client";

import React from "react";
import ScrollToTop from "react-scroll-up";
import { BsFillRocketFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  return (
    <div className=" relative z-[300]">
      <ScrollToTop showUnder={160}>
        <p className=" font-bold text-[#EA7E0A] hover:text-black cursor-pointer text-3xl border-[1px] border-[#EA7E0A] hover:border-black rounded-full p-2">
          <BsFillRocketFill size={20} />
        </p>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToTopButton;
