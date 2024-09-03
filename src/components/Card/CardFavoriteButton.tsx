import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import { Products } from "types/types";
import { addFavorite, removeFavorite } from "state/Favorite/favoriteSlice";
import { IconButton } from "components/Buttons/IconButton";

interface CardFavoriteProps {
  product: Products;
}

export const CardFavoriteButton = ({ product }: CardFavoriteProps) => {
  const dispatch = useDispatch();

  const favoriteProducts = useSelector(
    (state: RootState) => state.favorites.favoriteProducts
  );

  const isFavorite = favoriteProducts.some(
    (favProduct) => favProduct.id === product.id
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <IconButton
      onClick={handleToggleFavorite}
      icon={isFavorite ? <HeartFilled /> : <HeartOutlined />} // Pass the appropriate icon
    />
  );
};
