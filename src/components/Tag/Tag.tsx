import React from "react";

import { Tag } from "antd";

interface TagProps {
  icon?: React.ReactNode;
  title: string;
}

export const TagComponent: React.FC<TagProps> = ({ icon, title }) => {
  return (
    <Tag icon={icon} color="#55acee">
      {title}
    </Tag>
  );
};
