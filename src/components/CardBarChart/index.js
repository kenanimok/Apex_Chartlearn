import { Row, Col } from "antd";
import React from "react";
import { TextTitle } from "../../pages/chartui/ui.style";
import ContainerCardReport from "../TitleCardReport";

export default function CardBarChart(props) {
  const { title } = props;
  return (
    <>
      <ContainerCardReport
        background="var(--white)"
        color="#1D1D42"
        padding="10px 20px"
      >
        <Row>
          <Col className="col-center">
            <TextTitle color="#1D1D42">{title}</TextTitle>
          </Col>
          <Col className="col-button"></Col>
        </Row>
      </ContainerCardReport>
    </>
  );
}
