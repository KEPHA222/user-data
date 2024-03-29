"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import PromptCard from "./PromptCard";
import NavigationButtons from "./NavigationButtons";

const PromptCardList = ({ users, albums }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavigationButtons />
        <div>
          <h3 className="font-satoshi font-semibold text-gray-900">
            Number of Users:{" "}
            <span className=" text-[#EA7E0B]">{users.length}</span>
          </h3>
        </div>
      </div>
      <div className="prompt_layout">
        {users.map((user) => (
          <PromptCard key={user.id} user={user} albums={albums} />
        ))}
      </div>
    </>
  );
};

const Feed = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  // Fetching Users and their no. of Albums
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    const fetchAlbums = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await response.json();
      setAlbums(data);
    };

    fetchUsers();
    fetchAlbums();
  }, []);

  return (
    <>
      {session?.user?.id ? (
        <section className="feed">
          {/* All Users */}
          <PromptCardList users={users} albums={albums} />
        </section>
      ) : (
        <p className="text-center text-red-400 text-lg md:text-xl py-10">
          You need to be Logged in to access Data!
        </p>
      )}
    </>
  );
};

export default Feed;
