import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spacer from "./Spacer";

export default {
  title: "layout/Spacer",
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

export const Horizontal: ComponentStory<typeof Spacer> = (args) => (
  <Spacer size={40} type="horizontal" />
);
export const Vertical: ComponentStory<typeof Spacer> = (args) => (
  <Spacer size={1} type="vertical" />
);
