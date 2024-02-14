"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const UserPage = () => {
  const { data: session } = useSession();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  // Fetching Single Album and Its' Photos
  useEffect(() => {
    const fetchAlbumsData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
      );
      const userData = await res.json();
      //   console.log(userData);
      setUser(userData);
    };

    const fetchAlbumsPhotos = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}/photos`
      );
      const userAlbums = await res.json();
      //   console.log(userAlbums);
      setAlbums(userAlbums);
    };

    fetchAlbumsData();
    fetchAlbumsPhotos();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {session?.user?.id ? (
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-3 ">
              <div>
                <h3 className="font-satoshi font-semibold  text-[#EA6B0B]">
                  Album Information
                </h3>
                <h3 className="font-satoshi font-semibold text-gray-900">
                  UserID. {user.userId}
                </h3>
                <h3 className="font-satoshi font-semibold text-gray-900">
                  Id - {user.id}
                </h3>

                <p className="font-inter text-sm text-gray-500">
                  Title - {user.title}
                </p>
                <h3 className="font-satoshi font-semibold text-gray-900 underline pt-5">
                  Album Photos
                </h3>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="prompt_layout">
              <div className=" font-satoshi text-sm text-gray-700">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
                  {albums.map((album, index) => (
                    <li key={album.id} className="flex  pt-2">
                      <div>{index + 1}.</div>

                      <div>
                        <Image
                          src={album.url}
                          width={300}
                          height={300}
                          alt={album.title}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-400 text-lg md:text-xl py-10">
          You need to be Logged in to access Data!
        </p>
      )}
    </>
  );
};

export default UserPage;
