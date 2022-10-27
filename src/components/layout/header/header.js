import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const Header_bar = () => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "#f0f2f5",
      }}
    ></Header>
  );
};

export default Header_bar;
