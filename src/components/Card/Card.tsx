import React from "react";
import { Card } from "antd";
import { Products } from "types/types";
import { TagComponent } from "components/Tag/Tag";
import { ReadMoreButton } from "components/Buttons/ReadMoreButton";
import { EllipsisOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { IconButton } from "components/Buttons/IconButton";
import { CardFavoriteButton } from "./CardFavoriteButton";

import "./card.css";

const { Meta } = Card;

export interface CardComponentProps {
  product: Products;
}

export const CardComponent = ({ product }: CardComponentProps) => {
  return (
    <Card
      className="card-container"
      actions={[
        <CardFavoriteButton product={product} />,
        <IconButton icon={<ShoppingCartOutlined />} />,
        <IconButton icon={<EllipsisOutlined />} />,
      ]}
      cover={
        <div className="card-cover">
          <img
            alt={product.title}
            src={product.thumbnail}
            className="card-image"
          />
        </div>
      }
    >
      <Meta
        title={product.title}
        description={
          <div>
            <TagComponent title={product.brand ?? "Unknown Brand"} />
            <TagComponent title={product.category} />
            <h2>{product.price} $</h2>
            <ReadMoreButton>{product.description}</ReadMoreButton>
          </div>
        }
      />
    </Card>
  );
};
