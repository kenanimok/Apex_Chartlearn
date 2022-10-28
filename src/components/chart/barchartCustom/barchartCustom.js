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
  const colors = ["#4786FF", "#FFA336", "#23146C"];

  const checkData = data && data?.total_agender === 0;

  const total = data?.percent_male + data?.percent_female;
  const percentMale = (data?.percent_male / total) * 100;
  const percentFemale = (data?.percent_female / total) * 100;
  const percentMales = `${data?.percent_male}%`;
  const percentFemales = `${data?.percent_female}%`;
  const percentAgender = `${data?.percent_agender}%`;

  return (
    <>
      <BoxBarTree hide={!checkData}>
        <Item>
          <BoxIcon>
            <p>ชาย</p>
          </BoxIcon>
          <Progress margin="0 20">
            {data?.percent_male > 10 ? (
              <Bar
                className="men"
                fontSize={10}
                percen={data?.percent_male}
                color={colors[0]}
              >
                {data?.percent_male}%
              </Bar>
            ) : (
              <CustomTooltip
                overlayClassName="donut-tooltip"
                placement="top"
                title={percentMales}
                color="#ffffff"
              >
                <Bar
                  className="men"
                  fontSize={10}
                  percen={data?.percent_male}
                  color={colors[0]}
                />
              </CustomTooltip>
            )}
          </Progress>
          <Total>{numeral(data?.total_male).format("0,0")}</Total>
        </Item>

        <Item>
          <BoxIcon>
            {/* <img src={IconWo} alt="icon" /> */}
            <p>หญิง</p>
          </BoxIcon>
          <Progress margin="0 20">
            {data?.percent_female > 10 ? (
              <Bar
                className="men"
                fontSize={10}
                percen={data?.percent_female}
                color={colors[1]}
              >
                {data?.percent_female}%
              </Bar>
            ) : (
              <CustomTooltip
                overlayClassName="donut-tooltip"
                placement="top"
                title={percentFemales}
                color="#ffffff"
              >
                <Bar
                  className="men"
                  fontSize={10}
                  percen={data?.percent_female}
                  color={colors[1]}
                />
              </CustomTooltip>
            )}
          </Progress>
          <Total>{numeral(data?.total_female).format("0,0")}</Total>
        </Item>

        <Item>
          <BoxIcon>
            {/* <img src={IconN} alt="icon" /> */}
            <p>ไม่ระบุเพศ</p>
          </BoxIcon>
          <Progress margin="0 20">
            {data?.percent_agender > 10 ? (
              <Bar
                className="men"
                fontSize={10}
                percen={data?.percent_agender}
                color={colors[2]}
              >
                {data?.percent_agender}%
              </Bar>
            ) : (
              <CustomTooltip
                overlayClassName="donut-tooltip"
                placement="top"
                title={percentAgender}
                color="#ffffff"
              >
                <Bar
                  className="men"
                  fontSize={10}
                  percen={data?.percent_agender < 1 ? 1 : data?.percent_agender}
                  color={colors[2]}
                />
              </CustomTooltip>
            )}
          </Progress>
          <Total>{numeral(data?.total_agender).format("0,0")}</Total>
        </Item>
      </BoxBarTree>

      <BoxBarTree hide={checkData}>
        <TopBar>
          <BoxIcon gap={16}>
            {/* <img className="bar-two" src={IconMen} alt="icon" /> */}
            <p className="total">{numeral(data?.total_male).format("0,0")}</p>
          </BoxIcon>
          <BoxIcon gap={16}>
            <p className="total">{numeral(data?.total_female).format("0,0")}</p>
            {/* <img className="bar-two" src={IconWo} alt="icon" /> */}
          </BoxIcon>
        </TopBar>
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
