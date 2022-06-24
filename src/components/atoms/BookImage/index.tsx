import React from "react";
import { CardMedia } from "@mui/material";

export interface BookImageType {
  image: string;
  onClick?: () => void;
}

const BookImage = ({ image, onClick }: BookImageType) => {
  return (
    <CardMedia
      component={"img"}
      image={image}
      height="292px"
      width="294.1007080078125px"
      className="book-image"
      onClick={onClick}
    ></CardMedia>
  );
};

export default BookImage;
