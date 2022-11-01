import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
export default function Kenmix() {
  const series = [
    {
      name: "Income",
      type: "column",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: "Cashflow",
      type: "column",
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 80],
    },
    {
      name: "Revenue",
      type: "line",
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ];
  const options = {
    chart: {
      width: 200,
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 5],
    },
    xaxis: {
      categories: [
        "<= 255",
        "26-34",
        "35-44",
        "45-54",
        "55-64",
        ">= 65",
        "ไม่ระบุอายุ",
        ["ไม่ระบุเพศ", "และอายุ"],
      ],
      labels: {
        show: true,
        style: {
          colors: "#B1B1B1",
          fontSize: "12px",
          fontFamily: "Prompt",
          fontWeight: 400,
        },
        offsetY: -4,
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },

    markers: {
      size: 6,
      strokeColors: "#EFEBFF",
      strokeWidth: 2,
      shape: "circle",
      radius: 2,
      showNullDataPoints: false,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        style: {
          colors: "#B1B1B1",
          fontSize: "12px",
          fontFamily: "Prompt",
          fontWeight: 400,
        },
        formatter: (value) => {
          const num = value >= 1000 ? value / 1000 : value;
          return value < 1000 ? `${num}` : `${Math.floor(num * 10) / 10}K`;
        },
      },
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  };
  return (
    <div>
      <Chart options={options} series={series} height="500" width="100%" />
    </div>
  );
}
