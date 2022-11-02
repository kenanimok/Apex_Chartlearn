import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #313744;
`;
export const BoxChart = styled(ReactApexChart)`
  .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {
    display: flex;
    align-items: center;
  }
  .apexcharts-tooltip.apexcharts-theme-light {
    width: 192px;
    height: 200px;
    background: #ffffff;
    box-shadow: 0px 1px 16px #eaeaea;
    border-radius: 16px;
    border: none !important;
    padding: 10px 16px;
    .text-title {
      margin: 0px;
      font-size: 12px;
    }
    .line {
      width: 160px;
      border: 1px solid #dde0df;
    }
    .row {
      align-items: center;
      .box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-top: 5px;
      }
      .point-protein {
        margin: 0 10px 0 0;
        width: 10px;
        height: 10px;
        background: #00ada4;
        border-radius: 100%;
        align-items: center;
      }
      .point-fat {
        margin: 0 10px 0 0;
        width: 10px;
        height: 10px;
        background: #6776c5;
        border-radius: 100%;
        align-items: center;
      }
      .point-carbohydrate {
        margin: 0 10px 0 0;
        width: 10px;
        height: 10px;
        background: #e886c1;
        border-radius: 100%;
        align-items: center;
      }
      .text {
        margin: 0 10px 0 0;
        font-size: 12px;
      }
      .text-b {
        margin: 0;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
`;
