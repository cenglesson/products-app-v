import React from "react";

import { Card } from "antd";
import { PageHeader } from "@ant-design/pro-components";

import "./card.css";

interface HeaderCardProps {
  readonly header: {
    title: string;
    subTitle?: string;
  };
  readonly leftActions?: React.ReactNode;
  readonly rightActions?: React.ReactNode;
}

interface CardHeaderProps {
  readonly title: string;
  readonly subTitle?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, subTitle }) => {
  return (
    <PageHeader
      className="header-card--no-padding"
      title={title}
      subTitle={subTitle}
    />
  );
};

export const HeaderCardComponent: React.FC<HeaderCardProps> = ({
  header,
  leftActions,
  rightActions,
}) => {
  const { title = "", subTitle } = header;

  return (
    <Card className="header-card-container">
      <CardHeader title={title} subTitle={subTitle} />
      {leftActions || rightActions ? (
        <div className="header-card-actions">
          <div className="header__actions">{!!leftActions && leftActions}</div>
          <div className="header__actions">
            {!!rightActions && rightActions}
          </div>
        </div>
      ) : null}
    </Card>
  );
};
