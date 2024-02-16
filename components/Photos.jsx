"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PromptCardPhoto from "./PromptCardPhoto";
import NavigationButtons from "./NavigationButtons";

const PromptCardList = ({ photos }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavigationButtons />
        <div>
          <h3 className="font-satoshi font-semibold text-gray-900">
            Number of Photos per Page:{" "}
            <span className=" text-[#EA7E0B]">{photos.length}</span>
          </h3>
        </div>
      </div>
      <div className="mt-0 prompt_layout">
        {photos.map((photos) => (
          <PromptCardPhoto key={photos.id} photos={photos} />
        ))}
      </div>
    </>
  );
};

const Photos = () => {
  const { data: session } = useSession();
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 500;
  const totalPages = Math.ceil(5000 / photosPerPage); // 5000 is the total number of photos

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${photosPerPage}`
      );
      const data = await response.json();
      setPhotos(data);
    };

    fetchPhotos();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {session?.user?.id ? (
        <section className="feed">
          {/* All Photos */}
          <PromptCardList photos={photos} />
          <div className="flex justify-center mt-4 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-[#EA7E0B] text-white"
                    : "bg-black text-white"
                } hover:bg-[#EA7E0B] hover:text-white font-bold py-2 px-4 rounded mx-1 mb-5`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      ) : (
        <p className="text-center text-red-400 text-lg md:text-xl py-10">
          You need to be Logged in to access Data!
        </p>
      )}
    </>
  );
};

export default Photos;
