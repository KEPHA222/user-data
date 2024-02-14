// import "@testing-library/jest-dom";
// import React from "react";
// import { render, screen } from "@testing-library/react";
// import NavigationButtons from "../../components/NavigationButtons";

// describe("Page", () => {
//   it("renders a heading", () => {
//     render(<NavigationButtons />);

//     const heading = screen.getByRole("heading", { level: 1 });

//     expect(heading).toBeInTheDocument();
//   });
// });

import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationButtons from "../../components/NavigationButtons";

describe("NavigationButtons", () => {
  it("renders navigation links", () => {
    render(<NavigationButtons />);

    // You can check for one of the navigation links
    const usersLink = screen.getByText("Users");

    expect(usersLink).toBeInTheDocument();
  });
});
