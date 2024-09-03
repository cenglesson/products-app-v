import React from "react";

import { Button } from "antd";

import "./button.css";

interface SecondaryButtonProps {
  label?: string | number;
  disabled?: boolean;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  keepFocus?: boolean;
  onClick?: () => void;
  size?: "small" | "large";
}

export const SecondaryButton = ({
  label,
  disabled,
  iconBefore,
  iconAfter,
  keepFocus = false,
  onClick,
  size,
}: SecondaryButtonProps) => {
  return (
    <Button
      type="default"
      onClick={onClick}
      disabled={disabled}
      className="button__icon"
      autoFocus={keepFocus}
      size={size}
    >
      {iconBefore ? iconBefore : null}
      {label ? <span>{label}</span> : null}
      {iconAfter ? iconAfter : null}
    </Button>
  );
};
