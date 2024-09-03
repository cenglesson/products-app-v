import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sider } from "components/Sider/Sider";
import { Navbar } from "components/Navbar/Navbar";

import "./main.css";
import { ContentLayout } from "components/layout/ContentLayout";

export const Main: React.FC = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(() => {
    const savedState = localStorage.getItem("menuCollapsed");
    return savedState ? JSON.parse(savedState) : false;
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCollapse = () => {
    const newState = !menuCollapsed;
    localStorage.setItem("menuCollapsed", JSON.stringify(newState));
    setMenuCollapsed(newState);
  };

  return (
    <div className="app-wrapper">
      {!isMobile && (
        <div className="sidebar">
          <Sider onCollapse={handleCollapse} collapsed={menuCollapsed} />
        </div>
      )}

      <ContentLayout className="content">
        <Outlet />
      </ContentLayout>

      {isMobile && (
        <div className="header" id="header">
          <Navbar />
        </div>
      )}
    </div>
  );
};
