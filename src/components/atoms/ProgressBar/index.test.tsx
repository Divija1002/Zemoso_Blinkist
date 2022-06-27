import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from ".";

describe("Progress Bar", () => {
  it("count number of divs", () => {
    const { container } = render(<ProgressBar status="reading" />);
    expect(container).toBeDefined();
  });
});
