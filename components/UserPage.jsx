"use client";

import { useEffect, useState } from "react";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch user data
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));

    // console.log(data);

    // Fetch user's albums
    // fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    //   .then((response) => response.json())
    //   .then((data) => setAlbums(data))
    //   .catch((error) => console.error("Error fetching albums:", error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h2>Albums</h2>
      {/* <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default UserPage;
