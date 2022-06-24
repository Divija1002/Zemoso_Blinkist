import { Story } from "@storybook/react";
import Button, { ButtonType } from ".";

export default {
  title: "components/atoms/button",
  component: Button,
};

// export const Button1 = () => (
//   <Button value="Finished" variant="text">
//     Finished
//   </Button>
// );

const Template: Story<ButtonType> = (args) => <Button {...args} />;

export const Button1 = Template.bind({});

Button1.args = {
  value: "Finished",
  variant: "text",
  children: "finished",
};

export const Button2 = Template.bind({});

Button2.args = {
  value: "Add to library",
  variant: "outlined",
  children: "Add to library",
};

export const Button3 = Template.bind({});

Button3.args = {
  value: "Read again",
  variant: "text",
  children: "Read again",
};
