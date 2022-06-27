import React from "react";
import { render, screen } from "@testing-library/react";
import Explore, { ExploreType } from ".";
import { BrowserRouter } from "react-router-dom";

const ExploreComponent = ({ Open }: ExploreType) => {
  return (
    <BrowserRouter>
      <Explore Open={Open} />
    </BrowserRouter>
  );
};

describe("Explore", () => {
  it("category", () => {
    render(<ExploreComponent Open />);
    const element = screen.getAllByRole("img");
    expect(element.length).toBe(18);
  });

  it("tabs", () => {
    render(<ExploreComponent Open />);
    const element = screen.getByText("Explore by category");
    expect(element).toBeInTheDocument();
    const element1 = screen.getByText("See recently added titles");
    expect(element1).toBeInTheDocument();
    const element2 = screen.getByText("See popular titles");
    expect(element2).toBeInTheDocument();
  });
});
