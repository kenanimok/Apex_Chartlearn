import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import styled from "styled-components";

const { Header, Content, Footer, Sider } = Layout;

export default function Tobnav() {
  return (
    <>
      <TopHeader>
        <Header>Header</Header>
      </TopHeader>
    </>
  );
}

export const TopHeader = styled.div`
  .ant-layout-header {
    background: #f5f5f5;
  }
`;
