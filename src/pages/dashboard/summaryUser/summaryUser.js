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

const SummaryUser = () => {
  const Datas = defaultData.dashboard_data.age_summary_data;
  const Summarygender = defaultData.dashboard_data.gender_summary_data;
  const [ageSummary, setAgeSummary] = useState({ data: Datas });

  const dataGraphMixed = [
    // {
    //   name: "ชาย",
    //   type: "column",
    //   data: ageSummary?.data.map((value) =>
    //     value.amount_mele !== 0 ? value.amount_male : null
    //   ),

    //   data: ageSummary?.data.map((value) =>
    //     value.amount_male !== 0 ? value.amount_male : null
    //   ),
    // },
    {
      name: "ชาย",
      type: "column",
      data: ageSummary?.data.map((value) =>
        value.amount_mele !== 0 ? value.amount_mele : null
      ),
    },
    {
      name: "หญิง",
      type: "column",
      data: ageSummary?.data.map((value) =>
        value.amount_female !== 0 ? value.amount_female : null
      ),
    },
    {
      name: "ไม่ระบุเพศและอายุ",
      type: "column",
      data: ageSummary?.data.filter((value) =>
        value.age_range !== "na_age_gender" ? null : value.amount_agender
      ),
    },
    {
      name: "จำนวนชาวต่างชาติ",
      type: "line",
      data: ageSummary?.data.map((value) => value.total_tourists_gender),
      percent: ageSummary?.data.map(
        (percent) => percent.percent_tourists_gender
      ),
    },
  ];

  const xaxisGraphMixed = (data) => {
    return (
      data &&
      data.map((d) =>
        d.age_range === "na_age"
          ? "ไม่ระบุอายุ"
          : d.age_range === "na_age_gender"
          ? ["ไม่ระบุเพศ", "และอายุ"]
          : d.age_range
      )
    );
  };

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
              <BarchartCustom data={Summarygender} />
            </ContainerCardReport>

            <ContainerCardReport className="larg">
              <Centercard>
                <MixedChart
                  style={{ paddin: "50px" }}
                  data={dataGraphMixed}
                  xaxis={xaxisGraphMixed(ageSummary.data)}
                  height="170px"
                />
              </Centercard>
            </ContainerCardReport>

            {/* <ContainerCardReport></ContainerCardReport> */}
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;

  .larg {
    grid-column: 2/4;
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
  margin-bottom: ${(props) => props.margin || "20px"};

  span {
    font-weight: 300;
    font-size: 10px;
    line-height: 16px;
    color: #b1b1b1;
  }
`;
