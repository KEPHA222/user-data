// pages/photo/[id].js
"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

const PhotoPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const photoData = await res.json();
      setPhoto(photoData);
    };

    if (id) {
      fetchPhoto();
    }
  }, [id]);

  const handleEdit = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`,
        {
          method: "PATCH", // or PUT
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newTitle,
          }),
        }
      );
      const updatedPhoto = await res.json();
      setPhoto(updatedPhoto);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating photo title:", error);
    }
  };

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {session?.user?.id ? (
        <div className="flex flex-col ">
          <div>
            <h1 className="font-satoshi font-semibold text-gray-900">
              AlbumId: <span className="text-[#EA6A0B]">{photo.albumId}</span>
            </h1>
          </div>
          <div className="py-5">
            <Image
              src={photo.url}
              width={300}
              height={300}
              alt={photo.title}
              className=" rounded-md"
            />
          </div>
          {isEditing ? (
            <div>
              <form className="relative w-full flex-center mb-2">
                <input
                  placeholder="Edit photo title"
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="search_input peer"
                />
              </form>
              <button className="black_btn" onClick={handleEdit}>
                Save
              </button>
            </div>
          ) : (
            <div>
              <h3 className="font-satoshi font-semibold text-gray-900 pb-5">
                <span className="text-[#EA6A0B]">Title:</span> {photo.title}
              </h3>
              <button className="black_btn" onClick={() => setIsEditing(true)}>
                Edit Title
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-red-400 text-lg md:text-xl py-10">
          You need to be Logged in to access Data!
        </p>
      )}
    </>
  );
};

export default PhotoPage;
