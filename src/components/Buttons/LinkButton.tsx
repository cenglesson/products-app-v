import React from "react";

import { Button } from "antd";

import "./button.css";

interface LinkButtonProps {
  label?: string | number;
  disabled?: boolean;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  keepFocus?: boolean;
  onClick?: () => void;
  size?: "small" | "large";
}

export const LinkButton = ({
  label,
  disabled,
  iconBefore,
  iconAfter,
  keepFocus = false,
  onClick,
  size,
}: LinkButtonProps) => {
  return (
    <Button
      type="link"
      onClick={onClick}
      disabled={disabled}
      className="button__icon button__link"
      autoFocus={keepFocus}
      size={size}
    >
      {iconBefore ? iconBefore : null}
      {label ? <span>{label}</span> : null}
      {iconAfter ? iconAfter : null}
    </Button>
  );
};
