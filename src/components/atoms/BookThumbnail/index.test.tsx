import React from "react";
import { render, screen } from "@testing-library/react";
import BookThumbNail from ".";

describe("Book Thumbnail", () => {
  it("title", () => {
    render(
      <BookThumbNail
        title="Bring Your Human to Work"
        author={["Erica Keswin"]}
      />
    );
    const element = screen.getByText("Bring Your Human to Work");
    expect(element).toBeInTheDocument();
  });

  it("author", () => {
    render(
      <BookThumbNail
        title="Bring Your Human to Work"
        author={["Erica Keswin"]}
      />
    );
    const element = screen.getByText("Erica Keswin");
    expect(element).toBeInTheDocument();
  });
});
