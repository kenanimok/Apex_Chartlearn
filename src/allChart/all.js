import React from "react";
import PiechartHook from "../PieHook";
import { Card } from "antd";
import Columnchart from "../ui/Columnchart";
import AreaChart from "../ui/areaChart";
import Barchart from "../ui/barchart";
import styled from "styled-components";

export default function Allchart() {
  return (
    <>
      <Card>
        <PiechartHook></PiechartHook>
      </Card>
      <Card>
        <Columnchart></Columnchart>
      </Card>
      <Card>
        <AreaChart></AreaChart>
      </Card>
      <Card style={{ display: "inline" }}>
        <Barchart></Barchart>
      </Card>
      <Card>
        <Progress>
          <div class="bar albanian">50.34%</div>
        </Progress>
      </Card>
    </>
  );
}

const Progress = styled.div`
  border: 1px solid #ededed;
  width: 173px;
  height: 32px;
  border-radius: 10px;
  box-shadow: 0 0 3px #b0b0;
  backdrop-filter: blur(2px) brightness(101%);
  background-color: #ededed;

  .bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20em;
    box-shadow: inset 0px 12px 1.7px #ffffff33;
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
    height: 32px;
    background-color: #FFA336;

  }
`;
