import React from "react";
import { Typography, Theme } from "@mui/material";
import { SxProps } from "@mui/system";

interface TypographyTextType {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const TypographyText = ({ variant, children, sx }: TypographyTextType) => {
  return (
    <Typography variant={variant} sx={sx}>
      {children}
    </Typography>
  );
};

export default TypographyText;
