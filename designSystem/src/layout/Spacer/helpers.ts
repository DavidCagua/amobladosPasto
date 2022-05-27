import { choices } from "../../../tokens";

export const mapSize = (size: keyof typeof choices.spacing) =>
  typeof size === "number" ? size : choices.spacing[size];
