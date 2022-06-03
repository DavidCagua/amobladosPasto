import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from "./Logo";

export default {
  title: "atoms/Logo",
  component: Logo,
  args: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};
