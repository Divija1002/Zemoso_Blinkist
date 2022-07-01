import renderer from "react-test-renderer";
import Login from ".";

describe("Login page Snapshot", () => {
  it("Login page testing", () => {
    const renderedComponent = renderer.create(<Login />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
