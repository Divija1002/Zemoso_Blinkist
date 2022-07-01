import BCard, { BCardType } from ".";
import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "components/molecules/cards",
  component: BCard,
};

const Template: Story<BCardType> = (args) => (
  <BrowserRouter>
    <BCard {...args} />
  </BrowserRouter>
);

export const card1 = Template.bind({});

card1.args = {
  book: {
    id: 1,
    image: "images/1.png",
    title: "Bring Your Human to Work",
    author: ["Erica Keswin"],
    readTime: 13,
    readersCount: "1.9k",
    status: "reading",
  },
};

export const card2 = Template.bind({});

card2.args = {
  book: {
    id: 1,
    image: "images/1.png",
    title: "Bring Your Human to Work",
    author: ["Erica Keswin"],
    readTime: 13,
    readersCount: "1.9k",
    status: "finished",
  },
};

export const card3 = Template.bind({});

card3.args = {
  book: {
    id: 1,
    image: "images/1.png",
    title: "Bring Your Human to Work",
    author: ["Erica Keswin"],
    readTime: 13,
    readersCount: "1.9k",
    status: "fresh",
  },
};
