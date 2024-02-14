import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Provider from "../../components/Provider";

describe("Provider", () => {
  it("renders children with session provider", () => {
    const mockSession = { user: { name: "Test User" } }; // Mock session data
    render(
      <Provider session={mockSession}>
        <div data-testid="child-component">Child Component</div>
      </Provider>
    );

    const childComponent = screen.getByTestId("child-component");

    expect(childComponent).toBeInTheDocument();
  });
});
