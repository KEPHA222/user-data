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
      console.log(userData);
      setUser(userData);
    };

    const fetchUserAlbums = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
      );
      const userAlbums = await res.json();
      console.log(userAlbums);
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
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
