"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";

const UserPage = () => {
  const { data: session } = useSession();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetching user based on their albums
    const fetchUserData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const userData = await res.json();
      // console.log(userData);
      setUser(userData);
    };

    // Fetching albums for each user
    const fetchUserAlbums = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
      );
      const userAlbums = await res.json();
      // console.log(userAlbums);
      setAlbums(userAlbums);
    };

    fetchUserData();
    fetchUserAlbums();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {session?.user?.id ? (
        <div className="mb-10">
          <div className="prompt_card">
            <h3 className="font-satoshi font-semibold text-[#EA6B0B]">
              User Information
            </h3>
            <div className="flex justify-between items-start gap-5">
              <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                <div className="flex flex-col">
                  <h3 className="font-satoshi font-semibold text-gray-900">
                    No. {user.id}
                  </h3>
                  <h3 className="font-satoshi font-semibold text-gray-900">
                    Name - {user.name}
                  </h3>
                  <h3 className="font-satoshi font-semibold text-gray-900">
                    Email - {user.email}
                  </h3>
                  <h3 className="font-satoshi font-semibold text-gray-900">
                    Phone - {user.phone}
                  </h3>
                </div>
              </div>
            </div>

            {/* 10 dynamics albums for each user  */}
            <div className=" font-satoshi text-sm text-gray-700">
              <h3 className="font-satoshi font-semibold text-gray-900 underline pt-2">
                User Albums
              </h3>
              <ul>
                {albums.map((album, index) => (
                  <li key={album.id} className="pt-2">
                    {index + 1}.{" "}
                    <Link
                      href={`/album/${album.id}`}
                      className=" hover:text-[#FF5722]"
                    >
                      {album.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-400 text-lg md:text-xl py-10">
          You need to be Logged in to access Data!
        </p>
      )}
    </div>
  );
};

export default UserPage;
