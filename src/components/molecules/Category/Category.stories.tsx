import { Story } from "@storybook/react";
import Category, { CategoryProps } from ".";

export default {
  title: "components/molecules/category",
  component: Category,
};

// export const ExploreCategory = () => (
//   <Category image="images/Vector4.png">Entrepreneurship</Category>
// );

const Template: Story<CategoryProps> = (args) => <Category {...args} />;

export const Entrepreneurship = Template.bind({});

Entrepreneurship.args = {
  image: "images/Vector4.png",
  children: "Entrepreneurship",
};
