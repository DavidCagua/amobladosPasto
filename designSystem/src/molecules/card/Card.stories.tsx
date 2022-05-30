import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

export default {
  title: "molecules/Card",
  component: Card,
  args: {
    src: "https://a0.muscache.com/im/pictures/monet/Luxury-553449454187790697/original/475750f4-33de-4e1d-bbd7-f1939896ce9c?im_w=720",
    price: 50000,
    title: "Apartamento en el centro",
    location: "Barrio San Andres",
  },
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);
