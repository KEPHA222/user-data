"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ users, albums }) => {
  return (
    <>
      <div className="pt-14">
        <p>Number of users: {users.length}</p>
      </div>
      <div className="mt-10 prompt_layout">
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

  useEffect(() => {
    const fetchUsers = async () => {
      // const response = await fetch("/api/prompt");
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
        <p className="text-center text-red-400 text-xl py-10">
          You need to be logged in to access Data!
        </p>
      )}
    </>
  );
};

export default Feed;
