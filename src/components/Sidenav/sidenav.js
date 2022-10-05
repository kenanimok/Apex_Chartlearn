import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { Siderbars } from "./sidesav.style";
import { useState } from "react";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ChartUi from "../../pages/chartui/chartUi";
import styled from "styled-components";
const { Header, Content, Footer, Sider } = Layout;
const Sidenav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const items = [
    {
      label: <Link to="/">Dashboard</Link>,
      key: "dashboard",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/all">all</Link>,
      key: "all",
      icon: <UserOutlined />,
    },

    {
      label: <Link to="/report">report</Link>,
      key: "report",
      icon: <DesktopOutlined />,
    },
    {
      label: <Link to="/form">form</Link>,
      key: "form",
      icon: <DesktopOutlined />,
    },
    {
      label: <Link to="/froala">froala</Link>,
      key: "froala",
      icon: <DesktopOutlined />,
    },
  ];

  //   const items = [{ label: "Dashbaord", key: "/", icon: <DesktopOutlined /> }];
  return (
    <>
      <StyleSide>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ minHeight: "100vh" }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            //   defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
      </StyleSide>
    </>
  );
};
export default Sidenav;

export const StyleSide = styled.div`
  .ant-layout-sider {
    background: #1d1d42;
  }
  .ant-menu.ant-menu-dark {
    background: #1d1d42;
  }
`;
