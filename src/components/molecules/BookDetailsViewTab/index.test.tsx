import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookDetailsViewTab from ".";

const mockFunction = jest.fn();

describe("Book Details View Tab", () => {
  it("text", () => {
    render(<BookDetailsViewTab passValue={mockFunction} />);
    const element = screen.getByText("Synopsis");
    expect(element).toBeInTheDocument();
    fireEvent.click(element, { mockFunction });
    const element1 = screen.getByText("Who is it for?");
    expect(element1).toBeInTheDocument();
    fireEvent.click(element1, { mockFunction });
    const element2 = screen.getByText("About the author");
    expect(element2).toBeInTheDocument();
    fireEvent.click(element2, { mockFunction });
  });
});
