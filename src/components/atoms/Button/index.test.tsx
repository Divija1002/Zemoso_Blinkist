import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";
import AddIcon from "@mui/icons-material/Add";

describe("Button", () => {
  it("Finished button", () => {
    render(<Button value="Finished" children="Finished" variant="text" />);
    const element = screen.getByRole("button");
    expect(element.textContent).toBe("Finished");
  });

  it("Read again button", () => {
    render(<Button value="Read again" children="Read again" variant="text" />);
    const element = screen.getByRole("button");
    expect(element.textContent).toBe("Read again");
  });

  it("Add to library button", () => {
    render(
      <Button value="Add to library" children="Add to library" variant="text" />
    );
    const element = screen.getByRole("button");
    const { container } = render(<AddIcon />);
    const iconHtml = container.innerHTML;
    expect(element.textContent).toBe("Add to library");
    expect(element.innerHTML).toContain(iconHtml);
    const style = window.getComputedStyle(element);
    expect(style.color).toEqual("rgb(3, 101, 242)");
  });
});
