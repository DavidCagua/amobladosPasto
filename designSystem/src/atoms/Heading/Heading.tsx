import React from "react";
import "./heading.css";
import { choices } from "../../../tokens";
import classNames from "classnames";

export interface HeadingProps {
  isCentered?: boolean;
  isInline?: boolean;
  children?: string;
  size?: keyof typeof choices.fontSize;
  color?: "white" | "black";
  weight?: "normal" | "bold";
}

const Heading = ({
  isCentered = false,
  isInline = false,
  size = "md",
  color = "black",
  weight = "normal",
  children,
}: HeadingProps) => {
  return (
    <h1
      className={classNames(
        "heading",
        {
          "is-centered": isCentered,
          "is-inline": isInline,
        },
        { [`size-${size}`]: size },
        { [`color-${color}`]: color },
        { [`weight-${weight}`]: weight }
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
