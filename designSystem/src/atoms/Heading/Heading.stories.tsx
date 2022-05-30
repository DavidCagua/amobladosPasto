import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./Heading";

export default {
  title: "atoms/Heading",
  component: Heading,
  args: { children: "Heading", size: "sm", color: "black" },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);
export const Default = Template.bind({});
Default.args = {};

export const Inline = Template.bind({});
Inline.args = {
  isInline: true,
};

export const Centered = Template.bind({});
Centered.args = {
  isCentered: true,
};
