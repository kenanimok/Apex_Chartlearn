import { Row, Col, List } from "antd";
import React from "react";
import ContainerCardReport from "../../components/TitleCardReport";
import { TextHeader } from "../chartui/ui.style";
import {
  ButtonExport,
  Container,
  TextButton,
  Title,
  PopulationTotal,
  TextTitle,
  BoxCard,
} from "./report.stye";
import { DatePicker, Space } from "antd";
import { Avatar } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const Report = () => {
  return (
    <>
      <Title>
        รายงานจำนวนนักท่องเที่ยวที่ตรวจโควิด D0, D6
        เปรียบเทียบกับจำนวนนักท่องเที่ยวขาเข้าทั้งหมด
      </Title>
      <Container>
        <ContainerCardReport padding="20px 20px 35px 20px">
          <Row>
            <Col span={16}>
              <TextHeader>
                ประจำเดือน
                <p>เลือกเดือน</p>
                <DatePicker picker="month" />
              </TextHeader>
            </Col>
            <Col span={8} className="col-button ">
              <ButtonExport>
                <TextButton>print</TextButton>
              </ButtonExport>
            </Col>
          </Row>
        </ContainerCardReport>

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
            <Col span={12}>
              <PopulationTotal>90,021</PopulationTotal>
            </Col>
          </Row>
        </ContainerCardReport>

        <BoxCard>
          <ContainerCardReport>
            <Row>
              <Col span={20} className="col-center">
                <Avatar
                  size="large"
                  style={{ background: "red" }}
                  icon={<UserOutlined />}
                />
                <TextTitle color={"red"}>
                  จำนวนชาวต่างชาติทั้งหมด (คน)
                </TextTitle>
              </Col>
              <Col className="col-button " span={4}>
                <PopulationTotal color="red">90,021</PopulationTotal>
              </Col>
            </Row>

            <Listdata>
              <Row>
                <Col span={12} className="col-center">
                  นักท่องเที่ยวติดเป็น
                  <span className="percent">99%</span>
                  <span className="covid">(นักเดินทางๆๆๆๆ)</span>
                </Col>
                <Col span={12} className="col-button">
                  {/* <PopulationTotal color="red">90,021</PopulationTotal> */}
                </Col>
              </Row>
            </Listdata>
            <Listdata>
              <Row>
                <Col span={12} className="col-center">
                  นักท่องเที่ยวติดเป็น
                  <span className="percent">99%</span>
                  <span className="covid">(นักเดินทางๆๆๆๆ)</span>
                </Col>
                <Col span={12} className="col-button">
                  {/* <PopulationTotal color="red">90,021</PopulationTotal> */}
                </Col>
              </Row>
            </Listdata>
          </ContainerCardReport>
        </BoxCard>
      </Container>
    </>
  );
};

export default Report;

export const Listdata = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 16px;
  padding: 10px;
  margin: 10px;
  .percent {
    font-size: 16px;
    font-weight: 500;
    margin-left: 18px;
    color: #40bea7;
  }
  .covid {
    font-size: 16px;
    font-weight: 400;
    color: #b1b1b1;
  }
`;
