import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Products } from "../../types/types";
import { CardComponent } from "components/Card/Card";

import { HeaderCardComponent } from "components/Card/HeaderCard";
import { Empty } from "antd";

import "./favorites.css";

export const Favorites: React.FC = () => {
  const favoriteProducts = useSelector(
    (state: RootState) => state.favorites.favoriteProducts
  );

  return (
    <div className="favorites">
      <HeaderCardComponent
        header={{
          title: "Favorites",
          subTitle: "Here you can see all your favorite products",
        }}
      />
      {favoriteProducts.length === 0 ? (
        <div className="favorites__empty">
          <Empty />
        </div>
      ) : (
        <div className="favorites__products">
          {favoriteProducts.map((item: Products) => (
            <div key={item.id}>
              <CardComponent product={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
