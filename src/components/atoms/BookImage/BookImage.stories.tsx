import { Box } from "@mui/system";
import { Story } from "@storybook/react";
import BookImage, { BookImageType } from ".";

export default {
  title: "components/atoms/bookImage",
  component: BookImage,
};

// export const Image = () => (
//   <Box sx={{ height: "292px", width: "294px" }}>
//     <BookImage image="images/1.png"></BookImage>
//   </Box>
// );

const Template: Story<BookImageType> = (args) => (
  <Box sx={{ height: "292px", width: "294px" }}>
    <BookImage {...args}></BookImage>
  </Box>
);

export const Image = Template.bind({});

Image.args = {
  image: "images/1.png",
};
