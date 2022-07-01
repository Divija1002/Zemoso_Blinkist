import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Entrepreneurship from ".";

describe("Entrepreneurship snapshot", () => {
  it("Entrpreneurship page testing", () => {
    const renderedComponent = renderer.create(
      <BrowserRouter>
        <Entrepreneurship />
      </BrowserRouter>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
