"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Link from "next/link";
import PromptCardPhoto from "./PromptCardPhoto";
import NavigationButtons from "./NavigationButtons";

const PromptCardList = ({ photos }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavigationButtons />
        <div>
          <h3 className="font-satoshi font-semibold text-gray-900">
            Number of Photos: {photos.length}
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

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();

      setPhotos(data);
    };

    fetchAlbums();
  }, []);

  return (
    <>
      {session?.user?.id ? (
        <section className="feed">
          {/* All Photos */}
          <PromptCardList photos={photos} />
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
