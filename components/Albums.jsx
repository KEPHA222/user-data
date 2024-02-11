"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import PromptCardAlbum from "./PromptCardAlbum";
import Link from "next/link";

const PromptCardList = ({ albums }) => {
  return (
    <>
      {/* <div className="pt-14">
        <h3 className="font-satoshi font-semibold text-gray-900">
          Number of Albums: {albums.length}
        </h3>
      </div> */}
      <div className="flex flex-col items-center justify-center">
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
        <div>
          <h3 className="font-satoshi font-semibold text-gray-900">
            Number of Albums: {albums.length}
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

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await response.json();

      setAlbums(data);
    };

    // fetchUsers();
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
        <p className="text-center text-red-400 text-xl py-10">
          You need to be logged in to access Data!
        </p>
      )}
    </>
  );
};

export default Albums;
