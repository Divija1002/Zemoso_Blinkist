import { Box } from "@mui/material";
import React, { Fragment } from "react";
import Typography from "../Typography";

export interface BookThumbnailType {
  title: string;
  author: string[];
}

export const BookThumbNail = ({ title, author }: BookThumbnailType) => {
  return (
    <Fragment>
      <Box sx={{ paddingLeft: "16px", paddingTop: "23px" }}>
        <Typography variant="subtitle1" sx={{ color: "#03314B" }}>
          {title}
        </Typography>
      </Box>
      <Box paddingLeft={"16px"} paddingTop={"16px"}>
        <Typography variant="body1" sx={{ color: "#6D787E" }}>
          {author}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default BookThumbNail;
