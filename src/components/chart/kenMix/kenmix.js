import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
export default function Kenmix() {
  const series = [
    {
      name: "ชาย",
      type: "column",
      data: [2, 2, 5, 10, 20, 1, 2, 4],
    },
    {
      name: "หญิง",
      type: "column",
      data: [2, 3, 7, 4, 8, 9, 6, 8],
    },
    {
      name: "จำนวนผู้ใช้งาน",
      type: "line",
      data: [4, 6, 10, 12, 23, 12, 14, 15],
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
    colors: ["#4D66C6", "#E886C1", "#00ADA4"],
    stroke: {
      width: [1, 1, 3],
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
      size: 5,
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
      position: "top",
      horizontalAlign: "left",
      offsetX: 0,
    },
  };
  return (
    <div>
      <Chart options={options} series={series} height="230px" />
    </div>
  );
}
