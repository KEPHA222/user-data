import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import PromptCard from "../../components/PromptCard";

describe("PromptCard", () => {
  it("renders user information", () => {
    // Sample User and Albums data
    const user = {
      id: 1,
      username: "john_doe",
      name: "John Doe",
      email: "john@example.com",
    };
    const albums = [
      { id: 1, userId: 1, title: "Album 1" },
      { id: 2, userId: 1, title: "Album 2" },
    ];

    render(<PromptCard user={user} albums={albums} />);

    // Checking if user information is rendered
    expect(screen.getByText(`No. ${user.id}`)).toBeInTheDocument();
    expect(screen.getByText(`Username - ${user.username}`)).toBeInTheDocument();
    expect(screen.getByText(`Name - ${user.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Email - ${user.email}`)).toBeInTheDocument();

    // Checking if the number of albums is displayed correctly
    const numAlbums = albums.filter((album) => album.userId === user.id).length;
    const albumsDiv = screen.getByText(/No\. of Albums/).closest("div");
    const albumsSpan = albumsDiv.querySelector("span");
    expect(albumsSpan).toHaveTextContent(numAlbums.toString());
  });
});
