import React, { useState } from "react";
import "antd/dist/antd.css";
import "./layout.css";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { Col, Row } from "antd";
import styled from "styled-components";
import { Card } from "antd";
import PiechartHook from "../PieHook";
import SampleLine from "./Columnchart";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [];

const ChartUi = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Contentlayout>
          <ContainerHead>
            <CardHead>
              <Titilecard>จำนวนชาวต่างชาติทั้งหมด</Titilecard>
              <ReportHuman>234234234</ReportHuman>
            </CardHead>
            <CardHeadGP>
              <TitileHuman>10 อันดับจำนวนนักท่องเที่ยวแต่ละสัญชาติ</TitileHuman>

              <SampleLine />
            </CardHeadGP>
          </ContainerHead>


           {/* <ContainerBody>
              <ItemBody className="item1">dddddd</ItemBody>
              <ItemBody>dddddd</ItemBody>
              <ItemBody>dddddd</ItemBody>
              <ItemBody>dddddd</ItemBody>
            </ContainerBody> */}
            <Row>
            <Colum span={12} style={{border:"2px"}}> <PiechartHook></PiechartHook>   </Colum>
            <Colum span={12} >
              {/* <Colum> <Row><CsCard><PiechartHook></PiechartHook></CsCard> <CsCard><PiechartHook></PiechartHook></CsCard></Row> </Colum>
              <Colum> <Row><CsCard><PiechartHook></PiechartHook></CsCard> <CsCard><PiechartHook></PiechartHook></CsCard></Row> </Colum>
              <Colum> <Row><CsCard><PiechartHook></PiechartHook></CsCard> <CsCard><PiechartHook></PiechartHook></CsCard></Row> </Colum> */}
                <Row> <CsCard><PiechartHook></PiechartHook></CsCard> <CsCard><PiechartHook></PiechartHook></CsCard> </Row>
                <Row> <CsCard><PiechartHook></PiechartHook></CsCard></Row>
                <Row> <CsCard><PiechartHook></PiechartHook></CsCard></Row>

            </Colum>
            


            </Row>
         


        </Contentlayout>
      </Layout>
    </Layout>
  );
};

export default ChartUi;

const Contentlayout = styled(Content)`
  background: #f8f8f8;
  margin: 30px;
`;
const CardHead = styled.div`
  background-color: white;
  width: 400px;
  height: 190px;
  /* margin: 20px; */
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-right: solid black;
`;

const Titilecard = styled.p`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-top: 10px;
`;

const TitileHuman = styled.span`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-top: 5px;
`;

const ReportHuman = styled.span`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  /* line-height: 75px; */

  /* display: flex;
flex-direction: row;
justify-content: end;
padding-right:40px;
padding-top: 10px; */
  color: #000000;
`;

const CardHeadGP = styled.div`
  background-color: white;
  width: 1100px;
  height: 190px;
  height: 190px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContainerHead = styled.div`
  display: flex;
`;


const ContainerBody = styled.div`
 display: grid;
  grid-template-columns: auto auto ;
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
 height: 100vh;
  .item1 {
  grid-row: 1 / span 3;
}
`

const ItemBody = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;

`

const Colum = styled(Col)`
background-color: white;
/* width: 100%;
height: 1076px; */
`

const CsCard = styled(Card)`
display:  flex;
flex-direction: row;
justify-content: start;
`
