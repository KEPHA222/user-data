"use client";

import Link from "next/link";
import React from "react";

const PromptCardAlbum = ({ albums }) => {
  // console.log("Albums", albums);

  return (
    // Display Each Album Card
    <div className="prompt_card">
      <Link href={`/album/${albums.id}`}>
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3 ">
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {albums.id}
              </h3>
              <h3 className="font-satoshi font-semibold text-gray-900">
                UserId - {albums.userId}
              </h3>

              <p className="font-inter text-sm text-gray-500">
                Title - {albums.title}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PromptCardAlbum;
