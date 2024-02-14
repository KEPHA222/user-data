import Link from "next/link";
import { FaSadTear } from "react-icons/fa";
import React from "react";

const CustomError = () => {
  // 404 - Page Not Found
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-60">
        <div className=" inline-flex flex-row">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <FaSadTear size={30} className="mt-1 ml-2" />
        </div>
        <p className="text-lg mb-8">
          Oops! The requested URL was not found on the Server.
        </p>
        <Link href="/">
          <p className=" text-[#EA5C0B] underline hover:text-gray-900">
            Go back to the HOMEPAGE
          </p>
        </Link>
      </div>
    </>
  );
};

export default CustomError;
