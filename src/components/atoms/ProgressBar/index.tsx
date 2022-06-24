import React from "react";
import { Box } from "@mui/material";

export interface ProgressBarType {
  status: string;
}

const ProgressBar = ({ status }: ProgressBarType) => {
  return status === "finished" ? (
    <Box
      sx={{
        background: "#DFE8F6",
        height: "15px",
        width: "283px",
      }}
    ></Box>
  ) : status === "reading" ? (
    <Box
      sx={{
        border: "1px solid #E1ECFC",
        height: "15px",
        width: "283px",
        background: "#F1F6F4",
      }}
    >
      <Box sx={{ background: "#E1ECFC", width: "88px", height: "15px" }}></Box>
    </Box>
  ) : null;
};

export default ProgressBar;
