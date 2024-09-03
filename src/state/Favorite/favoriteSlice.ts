import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState, Products } from "types/types";

const initialState: FavoritesState = {
  favoriteProducts: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Products>) {
      if (
        !state.favoriteProducts.some(
          (product) => product.id === action.payload.id
        )
      ) {
        state.favoriteProducts.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favoriteProducts = state.favoriteProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
