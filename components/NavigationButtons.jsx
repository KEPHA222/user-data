import Link from "next/link";
import React from "react";

const NavigationButtons = () => {
  //For easier page Navigation
  return (
    <div className="flex gap-5 pb-10">
      <Link href="/" className="black_btn">
        Users
      </Link>
      <Link href="/albums" className="black_btn">
        Albums
      </Link>
      <Link href="/photos" className="black_btn">
        Photos
      </Link>
    </div>
  );
};

export default NavigationButtons;
