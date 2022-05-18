import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "atoms/Button",
  component: Button,
  args: { label: "Button", size: "md" },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

export const primaryRounded = Template.bind({});
primaryRounded.args = {
  type: "primary",
  rounded: true,
};

export const secondaryRounded = Template.bind({});
secondaryRounded.args = {
  type: "secondary",
  rounded: true,
};
