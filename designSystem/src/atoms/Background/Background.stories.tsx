import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Background from "./Background";

export default {
  title: "atoms/Background",
  component: Background,
  args: { type: "primary" },
} as ComponentMeta<typeof Background>;

const Template: ComponentStory<typeof Background> = (args) => (
  <Background {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};
