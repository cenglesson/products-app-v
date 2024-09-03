import React from "react";

import { Button } from "antd";

interface PrimaryButtonProps {
  label: string | number;
  disabled?: boolean;
  onClick?: () => void;
  htmlType?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
}

export const PrimaryButton = ({
  label,
  disabled,
  onClick,
  htmlType,
  loading,
}: PrimaryButtonProps) => {
  return (
    <Button
      type="primary"
      htmlType={htmlType}
      disabled={disabled}
      onClick={onClick}
      loading={loading}
    >
      {label}
    </Button>
  );
};
