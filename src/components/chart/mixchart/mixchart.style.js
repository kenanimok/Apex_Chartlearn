import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

export const Chart = styled(ReactApexChart)`
  .apexcharts-tooltip.apexcharts-theme-light {
    width: auto;
    height: auto;
    background: #ffffff;
    box-shadow: 0px 1px 16px #eaeaea;
    border-radius: 16px;
    border: none;

    /* .apx-legend-position-top {
      position: absolute;
      top: 10px;
    } */

    .tooltip-dashboard {
      padding: 16px;

      .top-row {
        font-weight: 400;
        color: #1d1d42;
        line-height: 30px;
        border-bottom: 1px solid #dde0df;
      }

      .row-dot {
        display: flex;
        align-items: center;
        margin-bottom: 2px;

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 100%;
        }

        .total {
          background: #23146c;
        }

        .men {
          background: #4786ff;
        }

        .women {
          background: #ffa336;
        }

        p {
          font-size: 12px;
          font-weight: 400;
          color: #1d1d42;
          margin-left: 8px;
          margin-top: 4px;
          margin-bottom: 4px;
        }

        b {
          font-size: 12px;
          color: #1d1d42;
          font-weight: 500;
          margin-left: 4px;
        }
      }
    }
  }

  .apexcharts-legend-series {
    span:last-child {
      margin-left: 8px;
    }
  }
`;
