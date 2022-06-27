import React from "react";
import { render, screen } from "@testing-library/react";
import BookImage from ".";

describe("Book Image", () => {
  it("renders book image", () => {
    render(<BookImage image="images/1" />);
    const element = screen.getByRole("img");
    expect(element).toHaveAttribute("src", "images/1");
  });
});
