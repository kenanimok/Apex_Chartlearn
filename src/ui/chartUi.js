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
            <Avatar size="large" icon={<UserOutlined />} />
              <TextTitle>จำนวนชาวต่างชาติทั้งหมด (คน)</TextTitle>
            </Col>
            <Col span={12} >
              <PopulationTotal>90,021</PopulationTotal>
            </Col>
          </Row>
        </ContainerCardReport>

        <BoxCard>
          {/* <CardBarChart />
          <ChartCard title="สถิตช่วงอายุของชาวต่างชาติ" /> */}
          <div>dfsf</div>
        </BoxCard>

        <BoxCard>
          <ContainerCardReport>
            <PiechartHook />
          </ContainerCardReport>
          <ContainerCardReport>
            <PiechartHook />
          </ContainerCardReport>
          <ContainerCardReport>
            <PiechartHook />
          </ContainerCardReport>
        </BoxCard>
      </Container>
    </>
  );
};

export default ChartUi;














