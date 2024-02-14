import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer", () => {
  it("renders footer content", () => {
    render(<Footer />);

    const footerText = screen.getByText("Coded and maintained by ❤️");
    expect(footerText).toBeInTheDocument();

    const linkElement = screen.getByText("Savannah");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      "href",
      "https://www.savannahinformatics.com/"
    );
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveClass("underline");
  });
});
