import React, { useState, useEffect } from "react";
import numeral from "numeral";
import { BoxChart } from "./area.stye";
export default function Areachart() {
  const series = [
    {
      name: "โปรตีน",
      data: [
        10, 33, 30, 47, 50, 60, 76, 79, 87, 46, 50, 60, 76, 79, 87, 46, 30, 47,
        50, 50, 60, 76, 79,
      ],
    },
    {
      name: "ไขมัน",
      data: [
        30, 45, 58, 68, 70, 80, 18, 97, 86, 75, 80, 18, 97, 86, 75, 58, 68, 70,
        80, 80, 18, 97, 86,
      ],
    },
    {
      name: "คาร์โบไฮเดรต",
      data: [
        74, 46, 66, 33, 87, 90, 15, 48, 59, 64, 90, 15, 48, 59, 64, 90, 15, 48,
        59, 64, 90, 15, 48,
      ],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "01 Jan 2565",
        "02 Jan 2565",
        "03 Jan 2565",
        "04 Jan 2565",
        "05 Jan 2565",
        "06 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
        "07 Jan 2565",
      ],
    },
    legend: {
      fontSize: "12px",
      fontFamily: "Prompt",
      fontWeight: 400,
      horizontalAlign: "left",
      position: "top",
      offsetX: -35,
      offsetY: 10,
      itemMargin: {
        horizontal: 10,
      },
    },
    colors: ["#00ADA4", "#E886C1", "#4D66C6"],

    // tooltip: {
    //   x: {
    //     format: "dd/MM/yy HH:mm",
    //   },
    // },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        console.log("w", w);
        console.log("series", series);
        return `<div class='card-tooltip'>
          <div class='text-title'>${
            w?.globals?.categoryLabels[dataPointIndex]
          }</div>
           <hr class='line'/>
               <div class='row'>
                 <div class='box'>
                     <p class='text'>จำนวนผู้ใช้ทั้งหมด : </p>
                        <p class='text-b'>${
                          w?.globals.initialSeries[0].data[dataPointIndex] +
                          w?.globals.initialSeries[1].data[dataPointIndex]
                        }</p>
                 </div>
                 <div class='box'>
                     <p class='text-b'>ค่าเฉลี่ยสารอาหารที่บริโภค </p>
                 </div>
                   <div class='box'>
                   <p class='point-protein'></p>
                     <p class='text'>โปรตีน : </p>
                        <p class='text-b'>${
                          w?.globals.initialSeries[0].data[dataPointIndex] ===
                          null
                            ? 0
                            : w?.globals.initialSeries[0].data[dataPointIndex]
                        }</p>
                  </div>
                 <div class='box'>
                   <p class='point-fat'></p>
                     <p class='text'>ไขมัน : </p>
                        <p class='text-b'>${
                          w?.globals.initialSeries[0].data[dataPointIndex] ===
                          null
                            ? 0
                            : w?.globals.initialSeries[0].data[dataPointIndex]
                        }</p>
                  </div>
                  <div class='box'>
                    <p class='point-carbohydrate'></p>
                      <p class='text'>คาร์โบไฮเดรต : </p>
                        <p class='text-b'>${
                          w?.globals.initialSeries[1].data[dataPointIndex] ===
                          null
                            ? 0
                            : w?.globals.initialSeries[1].data[dataPointIndex]
                        }</p>
                  </div>
                  <div class='box'>
                      <p class='text'>แคลอรี่ : </p>
                        <p class='text-b'>2,049 Kcal</p>
                  </div>
               </div>
               </div>
            `;
      },
    },
  };
  return (
    <div>
      <BoxChart options={options} type="area" series={series} height="400px" />
    </div>
  );
}
