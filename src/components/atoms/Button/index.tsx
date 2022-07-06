import React from "react";
import styled, { css } from "styled-components";
import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Typography from "../Typography";

export interface ButtonType {
  value: string;
  children: React.ReactNode;
  variant: "text" | "outlined" | "contained";
  onClick?: (() => string) | (() => void);
}

const StyledButton = styled(Button)<ButtonType>`
  /* padding-left: 111px; */
  padding-top: 11px;
  padding-bottom: 10px;
  /* padding-right: 111px; */
  width: 284px;
  color: #22c870;
  ${(props) =>
    props.value === "Finished" &&
    css`
      color: #0365f2;
    `};
  ${(props) =>
    props.value === "Add to library" &&
    css`
      color: #0365f2;
      &:hover {
        background-color: #0365f2;
        color: #ffffff;
      }
    `}
  ${(props) =>
    props.value === "Read again" &&
    css`
      color: #0365f2;
    `}
`;

const SButton = ({ value, children, variant, onClick }: ButtonType) => {
  return (
    <StyledButton value={value} variant={variant} onClick={onClick}>
      {value === "Add to library" ? (
        <Box sx={{ display: "flex", gap: "13px" }}>
          <AddIcon />
          <Typography variant="button">{children}</Typography>
        </Box>
      ) : (
        <Typography variant="button">{children}</Typography>
      )}
    </StyledButton>
  );
};

export default SButton;
