import ProgressBar, { ProgressBarType } from ".";
import { Story } from "@storybook/react";

export default {
  title: "components/atoms/progressBar",
  component: ProgressBar,
};

// export const Rectangle = () => <ProgressBar status="finished"></ProgressBar>;

const Template: Story<ProgressBarType> = (args) => <ProgressBar {...args} />;

export const reading = Template.bind({});

reading.args = {
  status: "reading",
};

export const finished = Template.bind({});

finished.args = {
  status: "finished",
};
