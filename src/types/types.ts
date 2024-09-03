export interface Products {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  brand: string;
  thumbnail: string;
}

export type FavoritesState = {
  favoriteProducts: Products[];
};
