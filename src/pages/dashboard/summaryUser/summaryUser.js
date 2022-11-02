import React from "react";
import { useState } from "react";
import styled from "styled-components";
// import Corelayout from "../../components/layout/corelayout/corelayout";
import { Col, Row } from "antd";
import { AiFillFrown } from "react-icons/ai";
import Corelayout from "../../../components/layout/corelayout/corelayout";
import Columnchart from "../../../components/chart/columchart/columnchart";
import MixedChart from "../../../components/chart/mixchart/mixchart";
import { defaultData } from "./data";
import BarchartCustom from "../../../components/chart/barchartCustom/barchartCustom";
import Kenmix from "../../../components/chart/kenMix/kenmix";
import ProgressBar from "../../../components/chart/progess/progress";
import Iconfire from "../../../asset/image/fire.svg";
import IconYmanblue from "../../../asset/image/manblue.svg";
import IconYgreen from "../../../asset/image/man.svg";
import IconGirlpink from "../../../asset/image/girl.svg";

import Areachart from "../../../components/chart/areachart/areachart";

const SummaryUser = () => {
  const genderSummary = defaultData.dashboard_data.gender_summary_data;
  return (
    <>
      <Corelayout>
        <Containers>
          <ContainerCardReport padding="20px 20px 35px 20px">
            <Row>
              <Col span={24}>
                <Titlecalen>
                  ประจำวันที่ 1 กรกฎาคม 2565 ถึง วันที่ 31 กรกฎาคม 2565
                  <Row>
                    <Col span={7} style={{ paddingRight: "16px" }}>
                      <p>เลือกวันที่</p>
                      <InputCs></InputCs>
                    </Col>

                    <Col span={6} style={{ paddingRight: "16px" }}>
                      <p>เลือกวันที่</p>
                      <InputCs></InputCs>
                    </Col>

                    <Col span={6} style={{ paddingRight: "16px" }}>
                      <p>เลือกวันที่</p>
                      <InputCs></InputCs>
                    </Col>
                  </Row>
                </Titlecalen>
              </Col>
            </Row>
          </ContainerCardReport>
          <ContainerCardReport
            ppadding="10px 20px"
            background={"#0b2946"}
            color={"white"}
          >
            <Gbox>
              <div className="col-center">
                <Iconsmile />
                <TextTitle>
                  จำนวนผู้ใช้งานทั้งหมด (คน)
                  <p>(จากผู้ลงทะเบียน 30 คน)</p>
                </TextTitle>
              </div>
              <div className="col-button">
                <PopulationTotal>2,000</PopulationTotal>
              </div>
            </Gbox>
          </ContainerCardReport>

          <Boxcard>
            <ContainerCardReport>
              <TitleChart>จำนวนผู้ใช้งานจำแนกตามเพศ</TitleChart>
              <div style={{ padding: "30px", marginTop: "10px" }}>
                <BarchartCustom data={genderSummary} />
              </div>
            </ContainerCardReport>

            <ContainerCardReport className="larg">
              <TitleChart>สถิติช่วงอายุของผู้ใช้งาน (คน)</TitleChart>

              <Row>
                <Col span={21}>
                  <Centercard>
                    <Kenmix />
                  </Centercard>
                </Col>
                <Col span={3}>
                  <DpBox>
                    <p>อายุเฉลี่ย</p>
                    <div className="rowbox">
                      <div>
                        <img
                          src={IconYgreen}
                          alt="male"
                          style={{ width: "35px" }}
                        />
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        <div className="bigfont">35.32 ปี</div>
                        <div>ทั้งหมด</div>
                      </div>
                    </div>

                    <div className="rowbox">
                      <div>
                        <img
                          src={IconYmanblue}
                          alt="male"
                          style={{ width: "35px" }}
                        />
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        <div className="bigfont">35.32 ปี</div>
                        <div>ทั้งหมด</div>
                      </div>
                    </div>

                    <div className="rowbox">
                      <div>
                        <img
                          src={IconGirlpink}
                          alt="male"
                          style={{ width: "35px" }}
                        />
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        <div className="bigfont">35.32 ปี</div>
                        <div>ทั้งหมด</div>
                      </div>
                    </div>
                  </DpBox>
                </Col>
              </Row>
            </ContainerCardReport>
          </Boxcard>

          <Boxcard>
            <ContainerCardReport
              className="vertical"
              // padding="60px 30px 35px 20px"
            >
              <TitleChart>สถิติช่วงอายุของผู้ใช้งาน (คน)</TitleChart>
              <div style={{ padding: "40px 30px 35px 20px" }}>
                <ProgressBar />
                <Textcal>แคลอรี่เฉลี่ย (ต่อวัน)</Textcal>
                <BoxCal>
                  <img src={Iconfire} alt="icon" />
                  <div className="bigcal">2,143.56 Kcal</div>
                </BoxCal>
              </div>
            </ContainerCardReport>
            <ContainerCardReport className="lgvertical">
              <TitleChart>
                กราฟแสดงค่าเฉลี่ยสารอาหารที่ผู้ใช้งานได้รับ (กรัม)
              </TitleChart>

              <Areachart />
            </ContainerCardReport>
          </Boxcard>
        </Containers>
      </Corelayout>
    </>
  );
};

export default SummaryUser;

const Containers = styled.div`
  display: grid;
  margin: 20px;
  gap: 20px;
`;

const ContainerCardReport = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  background: ${(props) => (props.background ? props.background : "white")};
  box-shadow: ${(props) =>
    props.isPdfReport ? "0px" : "0px 1px 16px #eaeaea"};
  border: ${(props) => (props.isPdfReport ? "1px solid #eaeaea" : "0px")};
  border-radius: ${(props) =>
    props.boderradius ? `${props.boderradius}` : "24px"};
  color: ${(props) => (props.color ? props.color : `#1d1d42`)};
  padding: ${(props) => (props.padding ? props.padding : "20px")};

  .sub-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #b1b1b1;
    margin-left: 5px;
  }

  .col-button {
    display: flex;
    justify-content: end;
    /* display: -webkit-flex; */
    justify-content: flex-end;
    align-items: center;
  }

  .col-center {
    display: flex;
    align-items: center;
  }
`;

const Titlecalen = styled.div`
  padding: 5px;
  font-size: 24px;
  font-weight: 500px;

  p {
    font-weight: 400;
    font-size: 18px;
    padding-top: 10px;
    margin: 10px;
  }

  span {
    font-size: 14px;
    color: #b1b1b1;
  }
`;
const InputCs = styled.input`
  background-color: white;
  width: 100%;
  border: 1px solid #dde0df;
  border-radius: 16px;
  caret-color: #5d38fa;
  height: 54px;
`;

const Iconsmile = styled(AiFillFrown)`
  width: 70px;
  height: 70px;
`;

export const TextTitle = styled.span`
  margin-left: 18px;
  font-size: 18px;
  font-weight: 300;
  color: white;
  display: block;
  line-height: 22px;

  p {
    font-size: 16px;
    color: #b1b1b1;
  }
`;

export const PopulationTotal = styled.span`
  font-weight: 500;
  font-size: 40px;
  color: white;
  display: flex;
  justify-content: end;
`;

const Gbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Boxcard = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: repeat(3, 1fr);

  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;

  .larg {
    grid-column: 2/4;
  }

  .vertical {
    grid-row: 1/3;
  }
  .lgvertical {
    grid-column: 2/4;
    grid-row: 1/3;
  }
`;

const Centercard = styled.div`
  position: relative;
  top: 10%;
`;

export const TitleChart = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #1d1d42;
  margin-left: 20px;
  margin-top: 5px;
  /* margin-top: ${(props) => props.margintob || "20px"};
  margin-bottom: ${(props) => props.margin || "0px"}; */

  span {
    font-weight: 300;
    font-size: 10px;
    line-height: 16px;
    color: #b1b1b1;
  }
`;

const DpBox = styled.div`
  display: flex;
  flex-direction: column;

  .bigfont {
    font-weight: 500;
    font-size: 16px;
  }
  .rowbox {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 5px 0px;
  }
`;

const BoxCal = styled.div`
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f8f8f8;

  .col-center {
    align-items: center;
    justify-content: space-between;
  }

  .bigcal {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }

  p {
    font-family: "Prompt";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }
`;

const Textcal = styled.div`
  margin: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
`;
