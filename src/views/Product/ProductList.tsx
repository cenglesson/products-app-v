import React from "react";
import { Products } from "types/types";
import { CardComponent } from "components/Card/Card";

import "./products.css";

interface ProductListProps {
  products: Products[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="products-container__cards">
      {products.map((product) => (
        <CardComponent key={product.id} product={product} />
      ))}
    </div>
  );
};
