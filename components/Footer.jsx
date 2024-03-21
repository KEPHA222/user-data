import Link from "next/link";

import React from "react";

const Footer = () => {
  // Display footer
  return (
    <div className="mt-20">
      <p className="text-center text-black text-xs md:text-sm py-2">
        Coded and maintained by ❤️{" "}
        <Link
          href="https://github.com/KEPHA222"
          target="_blank"
          className=" underline"
        >
          Kepha
        </Link>
      </p>
    </div>
  );
};

export default Footer;
