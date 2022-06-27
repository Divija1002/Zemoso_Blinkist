import React from "react";
import { render, screen } from "@testing-library/react";
import BookDetails from ".";

describe("Book Details", () => {
  it("renders read time", () => {
    render(<BookDetails readTime={13} />);
    const element = screen.getByText(/13-minute read/i);
    expect(element).toBeInTheDocument();
  });

  it("renders readers count", () => {
    render(<BookDetails readTime={13} readerCount="1.9k" />);
    const element = screen.getByText(/1.9k reads/i);
    expect(element).toBeInTheDocument();
  });

  it("count images", () => {
    render(<BookDetails readTime={13} readerCount="1.9k" />);
    const elements = screen.getAllByRole("img");
    expect(elements.length).toBe(2);
  });

  it("read time image", () => {
    render(<BookDetails readTime={13} />);
    const element = screen.getByRole("img");
    expect(element).toHaveAttribute("src", "images/Vector2.png");
  });
});
