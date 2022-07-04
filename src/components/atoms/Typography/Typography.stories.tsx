import { Story } from "@storybook/react";
import TypographyText, { TypographyTextType } from ".";

export default {
  title: "components/atoms/Typography",
  component: TypographyText,
};

const Template: Story<TypographyTextType> = (args) => (
  <TypographyText {...args}>Typography</TypographyText>
);

export const Text = Template.bind({});

Text.args = {
  variant: "h1",
  sx: {},
};
