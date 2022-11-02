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
} from "./barchartCustom.style";
import numeral from "numeral";

const BarchartCustom = ({ data }) => {
  const colors = ["#4D66C6", "#E886C1", "#00ADA4"];

  const checkData = data && data?.total_agender === 0;

  const total = data?.percent_male + data?.percent_female;
  const percentMale = (data?.percent_male / total) * 100;
  const percentFemale = (data?.percent_female / total) * 100;
  const percentMales = `${data?.percent_male}%`;
  const percentFemales = `${data?.percent_female}%`;
  const percentAgender = `${data?.percent_agender}%`;

  return (
    <>
      <BoxBarTree hide={checkData}>
        {/* <TopBar>
          <BoxIcon gap={16}>
            <p className="total">{numeral(data?.total_male).format("0,0")}</p>
          </BoxIcon>
          <BoxIcon gap={16}>
            <p className="total">{numeral(data?.total_female).format("0,0")}</p>
          </BoxIcon>
        </TopBar> */}
        <Progress className="men-wo" height={40}>
          <Bar
            className="men"
            fontSize={14}
            percen={percentMale}
            color={colors[0]}
          >
            {data?.percent_male}%
          </Bar>
          <Bar
            className="women"
            fontSize={14}
            percen={percentFemale}
            color={colors[1]}
          >
            {data?.percent_female}%
          </Bar>
        </Progress>
        <BottomBar>
          <div className="row-dot">
            <div className="dot men"></div>
            <p>ชาย</p>
          </div>
          <div className="row-dot">
            <div className="dot women"></div>
            <p>หญิง</p>
          </div>
        </BottomBar>
      </BoxBarTree>
    </>
  );
};

export default BarchartCustom;
