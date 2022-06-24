import { Story } from "@storybook/react";
import BookThumbNail, { BookThumbnailType } from ".";

export default {
  title: "components/atoms/bookThumbnail",
  component: BookThumbNail,
};

const Template: Story<BookThumbnailType> = (args) => (
  <BookThumbNail {...args} />
);

// export const Thumbnail = () => (
//   <BookThumbNail
//     title="Bring Your Human to Work"
//     author={["Erica Keswin"]}
//   ></BookThumbNail>
// );

export const Thumbnail = Template.bind({});

Thumbnail.args = {
  title: "Bring Your Human to Work",
  author: ["Erica Keswin"],
};
