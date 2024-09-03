import React from "react";
import { Button, Tooltip } from "antd";
import "./button.css";

interface IconButtonProps {
  icon: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
  border?: boolean;
  size?: "small" | "large";
  title?: string;
}

export const IconButton = ({
  icon,
  disabled,
  onClick,
  border = false,
  size,
  title,
}: IconButtonProps) => {
  return (
    <Tooltip title={title} placement="top">
      <Button
        type="default"
        onClick={onClick}
        disabled={disabled}
        className={`icon_button ${border ? "" : "icon_button--no-text"}`}
        size={size}
      >
        {icon}
      </Button>
    </Tooltip>
  );
};
