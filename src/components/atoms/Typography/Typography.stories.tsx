import { Story } from "@storybook/react";
import TypographyText, { TypographyTextType } from ".";

export default {
  title: "components/atoms/Typography",
  component: TypographyText,
};

const Template: Story<TypographyTextType> = (args) => (
  <TypographyText {...args}>Typography</TypographyText>
);

export const Typography = Template.bind({});

Typography.args = {
  variant: "h1",
  sx: {},
};
