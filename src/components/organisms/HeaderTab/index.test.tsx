import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HeaderTab from ".";

const mockFunction = jest.fn();

describe("Header Tab", () => {
  it("tabs", () => {
    render(<HeaderTab tabStyle={{}} passValue={mockFunction} />);
    const element = screen.getByText("Finished");
    expect(element).toBeInTheDocument();
    fireEvent.click(element, mockFunction);
    const element1 = screen.getByText("Currently reading");
    expect(element1).toBeInTheDocument();
    fireEvent.click(element1, mockFunction);
  });
});
