import { ThemeProvider } from "@mui/material";
import HeaderTab from ".";
import Theme from "../../../Theme/ThemeFile";

export default {
  title: "components/organisms/HeaderTab",
  component: HeaderTab,
};

const passValue = (value: string) => {};

export const LibraryTab = () => (
  <ThemeProvider theme={Theme}>
    <HeaderTab tabStyle={{}} passValue={passValue} />
  </ThemeProvider>
);
