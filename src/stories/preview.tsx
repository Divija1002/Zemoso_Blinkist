import React from "react";
import Theme from "../Theme/ThemeFile";
import { ThemeProvider } from "@mui/material";

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={Theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  layout: "none",
};
