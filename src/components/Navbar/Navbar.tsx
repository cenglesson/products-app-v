import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";

import logo from "../../assets/logo.png";

import "./navbar.css";

import {
  FavoriteMenuItem,
  HomeMenuItem,
  keyFromPath,
  MenuItem,
  ProductMenuItem,
} from "components/Sider/MenuItems";

import "./navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <Button
        type="default"
        onClick={toggleMenu}
        className="navbar__hamburger-menu"
        icon={<MenuOutlined className="navbar__hamburger-menu-icon" />}
      />
      <div className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
        <Button
          type="default"
          onClick={toggleMenu}
          className="navbar__close-button"
          icon={<CloseOutlined />}
        />
        <Menu
          triggerSubMenuAction={"click"}
          defaultSelectedKeys={["/"]}
          selectedKeys={[keyFromPath(location.pathname)]}
          mode="inline"
          items={menuItems()}
          onSelect={toggleMenu}
          className="navbar__menu-items"
        />
      </div>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} style={{ height: 60 }} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

const menuItems = (): MenuItem[] => {
  const items: MenuItem[] = [
    HomeMenuItem(),
    ProductMenuItem(),
    FavoriteMenuItem(),
  ];

  return items;
};
