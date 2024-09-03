import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

import logo from "../../assets/logo.png";
import {
  FavoriteMenuItem,
  HomeMenuItem,
  keyFromPath,
  MenuItem,
  ProductMenuItem,
} from "./MenuItems";

import { IconButton } from "components/Buttons/IconButton";

import "./sider.css";

export interface Props {
  collapsed: boolean;

  onCollapse: () => void;
}

export const Sider = ({ collapsed, onCollapse }: Props) => {
  const renderIconButtonContent = (collapsed: boolean) => {
    const IconComponent = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;

    return <IconComponent />;
  };

  return (
    <div className="sider">
      <Layout.Sider
        className="sider__container"
        breakpoint="sm"
        collapsible
        defaultCollapsed={true}
        collapsed={collapsed}
        trigger={null}
      >
        <div className="sider__logo">
          <Link to="/">
            <img src={logo} style={{ height: 50 }} alt="logo" />
          </Link>
        </div>
        <Menu
          triggerSubMenuAction={"hover"}
          defaultSelectedKeys={["/"]}
          selectedKeys={[keyFromPath(useLocation().pathname)]}
          mode="inline"
          items={menuItems()}
          className="sider__menu"
          inlineCollapsed={collapsed}
        />
      </Layout.Sider>
      <div className="sider__expand-button">
        <IconButton
          icon={renderIconButtonContent(collapsed)}
          onClick={onCollapse}
          size="small"
        />
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
