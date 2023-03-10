import React, { useState } from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layoutnav
    //   style={{
    //     minHeight: '100vh',
    //   }}
    >
      <Sider >
    </Sider>

    </Layoutnav>
  );
};

export const Layoutnav  = styled(Layout)`
height: 100vh;

`

export default Sidebar;