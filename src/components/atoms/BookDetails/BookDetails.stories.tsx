import BookDetails from ".";
import { Story } from "@storybook/react";
import { BookDetailsType } from ".";

export default {
  title: "components/atoms/bookDetails",
  component: BookDetails,
};

const Template: Story<BookDetailsType> = (args) => <BookDetails {...args} />;

// export const Details = () => <BookDetails readTime={13}></BookDetails>;

// export const Details1 = () => (
//   <BookDetails readTime={13} readerCount={"1.9k"}></BookDetails>
// );

export const Details = Template.bind({});
Details.args = {
  readTime: 13,
};

export const Details1 = Template.bind({});
Details1.args = {
  readTime: 13,
  readerCount: "1.9k",
};
