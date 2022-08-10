import React from 'react'
import { Container, TextHeader, Title, TextTitle, PopulationTotal, BoxCard ,TextPickDate, Cardmain, BoxHead, Country, TitleCard} from "./uiPages9.style";
import ContainerCardReport from "../components/TitleCardReport";
import { Row,Col, Card } from 'antd';
import { Avatar } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import PiechartHook from '../Chart/Donutchart';
import Columnchart from '../Chart/Columnchart';


export default function DashboardPages9() {
  return (
    <>
      <Title>จำนวนชาวต่างชาติแบ่งตามพื้นที่</Title>
      <Container>
        <ContainerCardReport>
        <Row>
            <Col span={12} className="col-center">
              <TextHeader>ประจำวันที่ 24 มกราคม 2565 ถึง 30 มกราคม 2565</TextHeader>
            </Col>
            <Col span={12} className="col-button">
              <TextPickDate>เลือกวันที่</TextPickDate>
              {/* <ReportDatePicker picker={reportType} onChange={onChange} width="400px" disabled={loading} /> */}
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
              <Avatar size="large" />
              <TextTitle>จำนวนชาวต่างชาติทั้งหมด (คน)</TextTitle>
            </Col>
            <Col span={12} >
              <PopulationTotal>90,021</PopulationTotal>
            </Col>
          </Row>
        </ContainerCardReport>


    <BoxHead>
      <Cardmain>
    
      </Cardmain>

      <Cardmain>
    
    </Cardmain>

    <Cardmain>
    
    </Cardmain>

    </BoxHead>


      <BoxCard>
        <Cardmain paddin='0'>
    <TitleCard>สถิตช่วงอายุของชาวต่างชาติ</TitleCard>
          <PiechartHook/>
          <Country>
          <p>เยอรมัน</p>
          <p>เยอรมัน</p>
          <p>เยอรมัน</p>
          <p>เยอรมัน</p>
          <p>เยอรมัน</p>
          <p>เยอรมัน</p>



          </Country>
        </Cardmain>

        <Cardmain>
        <PiechartHook/>
        </Cardmain>

        <Cardmain className=''>
        <PiechartHook/>
        </Cardmain>


        <Cardmain className='chartmap'>
        {/* <PiechartHook/> */}
        </Cardmain>


        <Cardmain className='chartall'>
          <Columnchart/>
        </Cardmain>

        {/* <Cardmain className=''>
        <PiechartHook/>
        </Cardmain> */}

      </BoxCard>


  
      </Container>
    </>
  )
}
