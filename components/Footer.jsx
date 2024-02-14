import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <p className="text-center text-black text-xs md:text-sm py-2">
        Coded and maintained by ❤️{" "}
        <Link
          href="https://www.savannahinformatics.com/"
          target="_blank"
          className=" underline"
        >
          Savannah
        </Link>
      </p>
    </div>
  );
};

export default Footer;
