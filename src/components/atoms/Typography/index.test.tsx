import renderer from "react-test-renderer";
import Typography from ".";

describe("Typography Snapshot", () => {
  it("Typography Testing", () => {
    const renderedComponent = renderer.create(<Typography>Hello</Typography>);
    expect(renderedComponent).toMatchSnapshot();
  });
});
