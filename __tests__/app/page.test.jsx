import "@testing-library/jest-dom";
import React from "react"; // Import React
import { render, screen } from "@testing-library/react";
import Page from "../../app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
