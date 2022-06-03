import React from "react";
import "./background.css";
import classNames from "classnames";

export interface BackgroundProps {
  type?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

const Background = ({ type = "primary", children }: BackgroundProps) => {
  return (
    <div
      className={classNames("background", {
        [`background--type-${type}`]: type,
      })}
    >
      <div className="elipse"></div>
      {/* <div className="elipse2"></div> */}
      {children}
    </div>
  );
};

export default Background;
