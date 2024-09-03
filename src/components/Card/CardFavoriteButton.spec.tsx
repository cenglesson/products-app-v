import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { CardFavoriteButton } from "./CardFavoriteButton";
import { Products } from "types/types";
import { addFavorite, removeFavorite } from "state/Favorite/favoriteSlice";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockStore = configureStore([]);

const product: Products = {
  id: 1,
  title: "Test Product",
  description: "Test Description",
  price: 100,
  category: "Test Category",
  brand: "Test Brand",
  thumbnail: "test.jpg",
};

describe("CardFavoriteButton", () => {
  let store: any;

  beforeEach(() => {
    // Default setup with no favorites
    store = mockStore({
      favorites: {
        favoriteProducts: [],
      },
    });

    store.dispatch = vi.fn();
  });

  it("dispatches addFavorite action when product is not a favorite and button is clicked", () => {
    render(
      <Provider store={store}>
        <CardFavoriteButton product={product} />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(store.dispatch).toHaveBeenCalledWith(addFavorite(product));
  });

  it("dispatches removeFavorite action when product is a favorite and button is clicked", () => {
    // Reinitialize store with product already in favorites
    store = mockStore({
      favorites: {
        favoriteProducts: [product],
      },
    });

    // Render component with Provider and store
    render(
      <Provider store={store}>
        <CardFavoriteButton product={product} />
      </Provider>
    );

    // Ensure the state has the product in favorites
    const state = store.getState();
    expect(state.favorites.favoriteProducts).toContainEqual(product);

    // Click the button
    fireEvent.click(screen.getByRole("button"));

    // Ensure removeFavorite was dispatched with the correct ID
    expect(store.dispatch).toHaveBeenCalledWith(removeFavorite(product.id));
  });
});
