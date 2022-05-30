import React from "react";
import "./input.css";
import classNames from "classnames";

export interface ButtonProps {
  type?: "primary" | "secondary";
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  onClick?: () => void;
}

const Button = ({
  type = "primary",
  rounded = false,
  size = "md",
  placeholder,
  ...props
}: ButtonProps) => {
  return <input type="text" placeholder={placeholder}></input>;
};

export default Button;
