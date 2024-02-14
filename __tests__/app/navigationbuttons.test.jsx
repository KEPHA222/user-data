import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationButtons from "../../components/NavigationButtons";

describe("NavigationButtons", () => {
  it("renders navigation links", () => {
    render(<NavigationButtons />);

    // Checking for one of the navigation links
    const usersLink = screen.getByText("Users");

    expect(usersLink).toBeInTheDocument();
  });
});
