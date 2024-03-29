"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import PromptCardAlbum from "./PromptCardAlbum";
import NavigationButtons from "./NavigationButtons";

const PromptCardList = ({ albums }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavigationButtons />
        <div>
          <h3 className="font-satoshi font-semibold text-gray-900">
            Number of Albums:{" "}
            <span className=" text-[#EA7E0B]">{albums.length}</span>
          </h3>
        </div>
      </div>
      <div className="mt-0 prompt_layout">
        {albums.map((albums, index) => (
          <PromptCardAlbum key={albums.id} index={index} albums={albums} />
        ))}
      </div>
    </>
  );
};

const Albums = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  // Fetching All Albums(100)
  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await response.json();

      setAlbums(data);
    };

    fetchAlbums();
  }, []);

  return (
    <>
      {session?.user?.id ? (
        <section className="feed">
          {/* All Albums */}
          <PromptCardList albums={albums} />
        </section>
      ) : (
        <p className="text-center text-red-400 text-lg md:text-xl py-10">
          You need to be Logged in to access Data!
        </p>
      )}
    </>
  );
};

export default Albums;
