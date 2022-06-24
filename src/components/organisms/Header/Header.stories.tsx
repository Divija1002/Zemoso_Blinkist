import { BrowserRouter } from "react-router-dom";
import HeaderComponent from ".";

export default {
  title: "components/organisms/header",
  component: HeaderComponent,
};

export const header = () => (
  <BrowserRouter>
    <HeaderComponent></HeaderComponent>
  </BrowserRouter>
);
