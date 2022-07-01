import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Library from ".";

describe("Library page snapshot", () => {
  it("library page testing", () => {
    const renderedComponent = renderer.create(
      <BrowserRouter>
        <Library />
      </BrowserRouter>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
