import { ThemeProvider } from "@mui/material";
import Banner from ".";
import Theme from "../../../Theme/ThemeFile";

export default {
  title: "components/molecules/banner",
  component: Banner,
};

export const banner = () => (
  <ThemeProvider theme={Theme}>
    <Banner></Banner>
  </ThemeProvider>
);
