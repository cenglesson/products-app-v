import React from "react";
import { Link } from "react-router-dom";

import { MenuProps } from "antd";
import { RouteNames } from "route/routes.helpers";
import { HeartOutlined, HomeOutlined, DollarOutlined } from "@ant-design/icons";

export type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: string,
  key: string,
  icon: React.ReactNode,
  path?: string,
  children?: MenuItem[],
  onClick?: () => void
): MenuItem {
  return {
    key,
    icon,
    children,
    label: path ? <Link to={path}>{label}</Link> : label,
    onClick,
  } as MenuItem;
}

export const HomeMenuItem = () =>
  getItem("Home", "/", <HomeOutlined />, RouteNames.Home);

export const ProductMenuItem = () =>
  getItem("Product", "/products", <DollarOutlined />, RouteNames.Products);

export const FavoriteMenuItem = () =>
  getItem("Favorite", "/favorites", <HeartOutlined />, RouteNames.Favorites);

export const keyFromPath = (path: string) => {
  const routes = ["/favorites"];

  const foundRoute = routes.find((route) => path.includes(route));
  return foundRoute ? foundRoute : path;
};
