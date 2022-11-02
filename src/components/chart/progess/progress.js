import React from "react";
import {
  Bar,
  BoxBarTree,
  BoxIcon,
  Item,
  Progress,
  Total,
  TopBar,
  BottomBar,
  CustomTooltip,
} from "./progess.stye.js";
import numeral from "numeral";
import Iconsun from "../../../asset/image/Group 27723.svg";
import Iconmoon from "../../../asset/image/moon.svg";
import Iconpink from "../../../asset/image/sun.svg";
const ProgressBar = () => {
  const colors = ["#FBCD59", "#FFA336", "#23146C"];

  const data = {
    percent_male: 11,
  };

  return (
    // <BoxBarTree hide={!checkData}>
    <BoxBarTree hide={true}>
      <Item>
        <BoxIcon>
          <img src={Iconsun} alt="icon" />
          <p>ชาย</p>
        </BoxIcon>
        <Progress margin="0 20">
          <Bar
            className="men"
            fontSize={10}
            percen={data?.percent_male}
            color={colors[0]}
          >
            {data?.percent_male}%
          </Bar>
        </Progress>
        {/* <Total>{numeral(data?.total_male).format("0,0")}</Total> */}
      </Item>
      <Item>
        <BoxIcon>
          <img src={Iconmoon} alt="icon" />
          <p>หญิง</p>
        </BoxIcon>
        <Progress margin="0 20">
          <Bar
            className="men"
            fontSize={10}
            percen={data?.percent_male}
            color={colors[1]}
          >
            {data?.percent_male}%
          </Bar>
        </Progress>
        {/* <Total>{numeral(data?.total_female).format("0,0")}</Total> */}
      </Item>
      <Item>
        <BoxIcon>
          <img src={Iconpink} alt="icon" />
          <p>ไม่ระบุเพศ</p>
        </BoxIcon>
        <Progress margin="0 20">
          <Bar
            className="men"
            fontSize={10}
            percen={data?.percent_male}
            color={colors[2]}
          >
            {data?.percent_male}%
          </Bar>
        </Progress>
        {/* <Total>{numeral(data?.total_agender).format("0,0")}</Total> */}
      </Item>
    </BoxBarTree>
  );
};

export default ProgressBar;
