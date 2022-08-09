import React, { useState } from "react";
import { Col, Row } from 'antd'
import "antd/dist/antd.css";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import styled from "styled-components";
import { Card } from "antd";
import PiechartHook from "../PieHook";
import SampleLine from "./Columnchart";
import AreaChart from "./areaChart";
import { Container, TextHeader, Title, TextTitle, PopulationTotal, BoxCard } from "./ui.style";
import ContainerCardReport from "../components/TitleCardReport";
import { Avatar } from 'antd';
import CardBarChart from "../components/CardBarChart";
import Columnchart from "./Columnchart";
import Barchart from "./barchart";


const ChartUi = () => {
  return (
    <>
      <Title>ภาพรวมชาวต่างชาติในจังหวัดภูเก็ต</Title>
      <Container>
        <ContainerCardReport>
          <Row>
            <Col span={24}>
              <TextHeader>
                ประจำวันที่ 1 กรกฎาคม 2565 ถึง วันที่ 31 กรกฎาคม 2565
                <Row>
                  <Col span={8} style={{ paddingRight: "16px" }}>
                    <p>เลือกวันที่</p>
                  </Col>
                  <Col span={16}>
                    <p>เลือกสัญชาติ</p>
                  </Col>
                </Row>
              </TextHeader>
            </Col>
          </Row>
        </ContainerCardReport>
        {/* // padding t and b 10  r l 20 */}
        <ContainerCardReport
          background="#1D1D42"
          color="var(--white)"
          padding="10px 20px"
        >
          <Row>
            <Col span={12} className="col-center">
              <Avatar size="large" icon={<UserOutlined />}   />
              <TextTitle>จำนวนชาวต่างชาติทั้งหมด (คน)</TextTitle>
            </Col>
            <Col span={12} >
              <PopulationTotal>90,021</PopulationTotal>
            </Col>
          </Row>
        </ContainerCardReport>

        <BoxCard>
          <GraphCol className="">
            <TitleCard>สถิตช่วงอายุของชาวต่างชาติ</TitleCard>
            <CardHuman>
            <Avatar size="large" icon={<UserOutlined />} /> 
            <TextHuman>ชาย</TextHuman>
              <Progress>
                <div class="bar albanian">50.34%</div>
              </Progress>
              <div>12312312</div>
            </CardHuman>


            <CardHuman>
            <Avatar size="large" icon={<UserOutlined />} />
            <TextHuman>หญิง</TextHuman>
              <Progress>
                <div class="bar albanian">50.34%</div>
              </Progress>
              <div>12312312</div>
            </CardHuman>


            <CardHuman>
            <Avatar size="large" icon={<UserOutlined />} />
            <TextHuman>ไม่ระบุ<br></br>เพศ</TextHuman>

              <Progress>
                <div class="bar albanian">50.34%</div>
              </Progress>
              <div>12312312</div>
            </CardHuman>

            {/* <Barchart/> */}
          </GraphCol>

          <GraphCol className="chartcol">
            <TitleCard>สถิตช่วงอายุของชาวต่างชาติ</TitleCard>
            <Columnchart></Columnchart>
          </GraphCol>

          <ContainerCardReport>
            <TitleCard>จำนวนชาวต่างชาติจำแนกตามเพศ</TitleCard>
            <PiechartHook />
          </ContainerCardReport>


          <GraphCol className="chartmap">
            <TitleCard>สถิตช่วงอายุของชาวต่างชาติ</TitleCard>
            {/* <PiechartHook /> */}
          </GraphCol>



          <GraphCol className="">
            <TitleCard>สถิตช่วงอายุของชาวต่างชาติ</TitleCard>
            <PiechartHook />
          </GraphCol>



          <GraphCol className="chartall">
            <TitleCard>สถิตช่วงอายุของชาวต่างชาติ</TitleCard>
            <AreaChart />
          </GraphCol>

          <GraphCol className="">
            <TitleCard>สถิตช่วงอายุของชาวต่างชาติ</TitleCard>
            <PiechartHook />
          </GraphCol>

        </BoxCard>
      </Container>
    </>
  );
};

export default ChartUi;

const GraphCol = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  background: ${props =>
    props.background ? props.background : `var(--white)`};
  box-shadow: ${props => (props.isPdfReport ? '0px' : '0px 1px 16px #eaeaea')};
  border: ${props => (props.isPdfReport ? '1px solid #eaeaea' : '0px')};
  border-radius: 26px;
  color: ${props => (props.color ? props.color : `#1d1d42`)};
  padding: ${props => (props.padding ? props.padding : '20px')};

/* display: flex;
justify-content: center;
align-items: center;
 */

`
export const TitleCard = styled.span`
  font-size: 18px;
  color: #1d1d42;
  line-height: 22px;
  display: flex;
  align-items: center;
`

export const BoxMap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(2,1fr); */
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;

`

const Progress = styled.div`
  

  width: 60%;
  height:  40px;
  border-radius: 10px;
  box-shadow: 0 0 3px #b0b0;
  background-color: #ededed;

  .bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20em;
    color: white;
    font-family: "Prompt";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .bar.albanian {
    width: 50%;
    height: 40px;
    background-color: #FFA336;

  }
`;

const CardHuman = styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;
align-items: center; 
justify-content: space-evenly;
`

const TextHuman =styled.div`
/* margin: 10px; */


`












