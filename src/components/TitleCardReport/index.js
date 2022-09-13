import React from "react";
import { Container } from "./TitleCardReport.style";

const ContainerCardReport = (props) => {
  const {
    children,
    width,
    height,
    background,
    color,
    padding,
    noTitle,
    isPdfReport,
  } = props;

  return (
    <Container
      isPdfReport={isPdfReport}
      width={width}
      height={height}
      background={background}
      //   background={"red"}
      color={color}
      padding={noTitle ? "60px 20px 20px 20px" : padding}
    >
      {children}
    </Container>
  );
};

export default ContainerCardReport;
