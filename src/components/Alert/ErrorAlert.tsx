import React from "react";

import { Alert } from "antd";
import { AlertProps } from "./Alert.type";

import "./alert.css";

export const ErrorAlert: React.FC<AlertProps> = ({
  description,
  showIcon = true,
  message,
  closable = false,
  action,
}) => {
  return (
    <Alert
      message={message}
      description={description}
      type="error"
      showIcon={showIcon}
      closable={closable}
      className="alert"
      action={action}
    />
  );
};
