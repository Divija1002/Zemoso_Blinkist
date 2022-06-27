import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from ".";

describe("banner", () => {
  it("text 1", () => {
    render(<Banner />);
    const element = screen.getByText("Explore Books on entrepreneurship");
    expect(element).toBeInTheDocument();
  });

  it("text 2", () => {
    render(<Banner />);
    const element = screen.getByText(
      "Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
    );
    expect(element).toBeInTheDocument();
  });

  it("iamges", () => {
    render(<Banner />);
    const element = screen.getByRole("img");
    expect(element).toHaveAttribute("src", "images/banner.png");
  });
});
