import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookDetailsViewTab from ".";

const mockFunction = jest.fn();

describe("Book Details View Tab", () => {
  it("text", () => {
    render(<BookDetailsViewTab />);
    const element = screen.getByText("Synopsis");
    expect(element).toBeInTheDocument();
    fireEvent.click(element, { mockFunction });
    const element1 = screen.getByText("Who is it for?");
    expect(element1).toBeInTheDocument();
    fireEvent.click(element1, { mockFunction });
    const element2 = screen.getByText("About the author");
    expect(element2).toBeInTheDocument();
    fireEvent.click(element2, { mockFunction });
    const element3 = screen.getByText(
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."
    );
    expect(element3).toBeInTheDocument();
  });
});
