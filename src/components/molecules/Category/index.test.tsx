import React from "react";
import { render, screen } from "@testing-library/react";
import Category from ".";

describe("category", () => {
  it("entrepreneurship category", () => {
    render(<Category image="images/Vector4.png">Entrepreneurship</Category>);
    const element = screen.getByRole("img");
    expect(element).toHaveAttribute("src", "images/Vector4.png");
  });

  it("entrepreneurship category1", () => {
    render(<Category image="images/Vector4.png">Entrepreneurship</Category>);
    const element = screen.getByText("Entrepreneurship");
    expect(element).toBeInTheDocument();
  });
});
