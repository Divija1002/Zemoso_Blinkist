import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";
import { BrowserRouter } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("Header", () => {
  it("logo", () => {
    render(<HeaderComponent />);
    const element = screen.getAllByRole("img");
    expect(element.length).toBe(4);
  });

  it("text", () => {
    render(<HeaderComponent />);
    const element = screen.getByText("Explore");
    expect(element).toBeInTheDocument();
    const element1 = screen.getByText("My Library");
    expect(element1).toBeInTheDocument();
  });
});
