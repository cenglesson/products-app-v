import React, { useState } from "react";

import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { LinkButton } from "./LinkButton";

export const ReadMoreButton: React.FC<{ children: string }> = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const maxLength = 50;

  if (children.length <= maxLength) {
    return <p>{children}</p>;
  }

  return (
    <div>
      <p>{isExpanded ? children : `${children.substring(0, maxLength)}...`}</p>
      <LinkButton
        label={isExpanded ? "Read less" : "Read more"}
        onClick={toggleReadMore}
        iconBefore={
          isExpanded ? <MinusCircleOutlined /> : <PlusCircleOutlined />
        }
      />
    </div>
  );
};
