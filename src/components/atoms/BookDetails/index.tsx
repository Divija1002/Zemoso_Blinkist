import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

export interface BookDetailsType {
  readTime: number;
  readerCount?: string;
}

const BookDetails = ({ readTime, readerCount }: BookDetailsType) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "47.33px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingLeft: "17.67px",
          paddingTop: "17.67px",
          gap: "5.67px",
        }}
      >
        <CardMedia
          component={"img"}
          image="images/Vector2.png"
          sx={{ height: "16.666667938232422px", width: "16.666667938232422px" }}
        />
        <Typography variant="caption" sx={{ color: "#6D787E" }}>
          {readTime}-minute read
        </Typography>
      </Box>
      {readerCount ? (
        <Box
          sx={{
            display: "flex",
            paddingLeft: "17.67px",
            paddingTop: "17.67px",
            gap: "5.67px",
          }}
        >
          <CardMedia
            component={"img"}
            image="images/Vector3.png"
            sx={{ height: "17.5px", width: "13.33px" }}
          />
          <Typography variant="caption" sx={{ color: "#6D787E" }}>
            {readerCount} reads
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default BookDetails;
