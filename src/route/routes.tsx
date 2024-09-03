import { createBrowserRouter } from "react-router-dom";
import { RouteNames } from "./routes.helpers";
import { Products } from "views/Product/Products";
import { Favorites } from "views/Favorite/Favorites";
import { Home } from "views/Home/Home";
import { Main } from "app/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: RouteNames.Home, element: <Home /> },
      { path: RouteNames.Products, element: <Products /> },
      { path: RouteNames.Favorites, element: <Favorites /> },
    ],
  },
]);

export { router };
