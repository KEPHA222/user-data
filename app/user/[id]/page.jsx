// pages/user/[id].js
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const userData = await res.json();
      // console.log(userData);
      setUser(userData);
    };

    const fetchUserAlbums = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
      );
      const userAlbums = await res.json();
      // console.log(userAlbums);
      setAlbums(userAlbums);
    };
    console.log("this is id", id);
    // if (id) {
    fetchUserData();
    fetchUserAlbums();
    // }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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

                <p className="font-inter text-sm text-gray-500">
                  Email - {user.email}
                </p>
              </div>
            </div>
          </div>

          <div className=" font-satoshi text-sm text-gray-700">
            <h3 className="font-satoshi font-semibold text-gray-900 underline pt-2">
              User Albums
            </h3>
            <ul>
              {albums.map((album, index) => (
                <li key={album.id} className="pt-2">
                  {index + 1}. {album.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
