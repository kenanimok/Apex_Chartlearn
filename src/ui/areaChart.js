import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
export default function AreaChart() {
    const series = [
      {
        name: "Temperature in Fahrenheit", //will be displayed on the y-axis
        data: [2, 11203, 3, 5111,1,3993,22,2203,44,2021]
      }
    ];
    const options = {
      chart: {
        id: "simple-bar",
        toolbar:{
           show:false
          },
      },
      dataLabels: {
        enabled: false,
      },
      colors:['#4C4C4C'],

      xaxis: {
        categories: ["บริติช", "เยอรมนี", "รัสเซีย", "อินเดีย","มาเลเซีย","ออสเตรเลีย","ซาอุดีอาระเบีย","สิงคโปร์"," สหรัฐอเมริกา","ฝรั่งเศส"] //will be displayed on the x-asis
      }
    };
    return (
      <div>
        <Chart options={options} type="area" series={series} height="400" width="95%" />
      </div>
    );
  }