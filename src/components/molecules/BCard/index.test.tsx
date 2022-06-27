import React from "react";
import { render, screen } from "@testing-library/react";
import BCard, { bCardType } from ".";
import { BrowserRouter } from "react-router-dom";

const BookCard = ({ book, trending, justAdded, featured }: bCardType) => {
  return (
    <BrowserRouter>
      <BCard
        book={book}
        trending={trending}
        justAdded={justAdded}
        featured={featured}
      />
    </BrowserRouter>
  );
};

describe("BCard", () => {
  it("Add to library", () => {
    const book = {
      id: 1,
      image: "images/1.png",
      title: "Bring Your Human to Work",
      author: ["Erica Keswin"],
      readTime: 13,
      readersCount: "1.9k",
      status: "fresh",
    };
    render(<BookCard book={book} />);
    const element = screen.getByText("Add to library");
    expect(element).toBeInTheDocument();
  });

  it("Finished", () => {
    const book = {
      id: 1,
      image: "images/1.png",
      title: "Bring Your Human to Work",
      author: ["Erica Keswin"],
      readTime: 13,
      readersCount: "1.9k",
      status: "finished",
    };
    render(<BookCard book={book} />);
    const element = screen.getByText("Read again");
    expect(element).toBeInTheDocument();
  });

  it("Reading", () => {
    const book = {
      id: 1,
      image: "images/1.png",
      title: "Bring Your Human to Work",
      author: ["Erica Keswin"],
      readTime: 13,
      readersCount: "1.9k",
      status: "reading",
    };
    render(<BookCard book={book} />);
    const element = screen.getByText("Finished");
    expect(element).toBeInTheDocument();
  });

  it("Trending", () => {
    const book = {
      id: 1,
      image: "images/1.png",
      title: "Bring Your Human to Work",
      author: ["Erica Keswin"],
      readTime: 13,
      readersCount: "1.9k",
      status: "reading",
    };
    render(<BookCard book={book} trending={true} />);
    const element = screen.getAllByRole("img");
    expect(element.length).toBe(4);
  });

  it("just Added", () => {
    const book = {
      id: 1,
      image: "images/1.png",
      title: "Bring Your Human to Work",
      author: ["Erica Keswin"],
      readTime: 13,
      readersCount: "1.9k",
      status: "fresh",
    };
    render(<BookCard book={book} justAdded={true} />);
    const element = screen.getByText("Add to library");
    expect(element).toBeInTheDocument();
  });
});
