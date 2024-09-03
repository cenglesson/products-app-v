import React from "react";

import { Layout } from "antd";

interface ContentLayoutProps {
  children: JSX.Element;
  className: string;
}
export const ContentLayout = ({ children, className }: ContentLayoutProps) => {
  return <Layout.Content className={className}>{children}</Layout.Content>;
};
