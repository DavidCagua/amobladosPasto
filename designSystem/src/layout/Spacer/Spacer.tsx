import React from "react";
import "./spacer.css";
import classNames from "classnames";
// import { mapSize } from "./helpers";
import { choices } from "../../../tokens";

export interface SpacerProps {
  size?: keyof typeof choices.spacing;
  type?: "horizontal" | "vertical";
}

const Spacer = ({ size = 12, type = "horizontal" }: SpacerProps) => {
  // const height = 10;
  return (
    <div
      className={classNames("spacer", {
        [`type--${type === "horizontal" ? "horizontal" : "vertical"}`]: type,
      })}
      // style={{
      //   display: `${type === "horizontal" ? "inline-block" : "block"}`,
      //   width: 10,
      //   height: 10,
      // }}
    >
      {size}
    </div>
  );
};

export default Spacer;
