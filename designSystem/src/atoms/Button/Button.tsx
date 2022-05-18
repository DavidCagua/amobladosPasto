import React from "react";
import "./button.css";
import classNames from "classnames";

export interface ButtonProps {
  type?: "primary" | "secondary";
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
  onClick?: () => void;
}

const Button = ({
  type = "primary",
  rounded = false,
  size = "md",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "button",
        { [`type--${type}`]: type },
        { [`button--${rounded ? "rounded" : ""}`]: rounded }
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
