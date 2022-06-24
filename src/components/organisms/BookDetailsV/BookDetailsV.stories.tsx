import { ThemeProvider } from "@mui/material";
import { Story } from "@storybook/react";
import BookDetailsV, { BookDetailsVType } from ".";
import Theme from "../../../Theme/ThemeFile";

export default {
  title: "components/organisms/BookDetailsV",
  component: BookDetailsV,
};

const Template: Story<BookDetailsVType> = (args) => (
  <ThemeProvider theme={Theme}>
    <BookDetailsV {...args} />
  </ThemeProvider>
);

export const bookDetails = Template.bind({});

bookDetails.args = {
  id: 1,
};
