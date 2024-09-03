import React from "react";

import { AlertProps } from "./Alert.type";
import { Alert } from "antd";

import "./alert.css";

export const InfoAlert: React.FC<AlertProps> = ({
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
      type="info"
      showIcon={showIcon}
      closable={closable}
      className="alert"
      action={action}
    />
  );
};
