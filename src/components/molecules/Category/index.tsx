import React from "react";
import { Box } from "@mui/material";
import Typography from "../../atoms/Typography";

export interface CategoryProps {
  image: string;
  children: React.ReactNode;
  onclick?: () => void;
}

const Category = ({ image, children, onclick }: CategoryProps) => {
  return (
    <Box sx={{ display: "flex", gap: "12px" }} onClick={onclick}>
      <Box component="img" src={image} alt="category"></Box>
      <Typography variant="body2">{children}</Typography>
    </Box>
  );
};

export default Category;
