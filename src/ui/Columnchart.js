import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
export default function Columnchart() {
    const series = [
      {
        name: "Temperature in Fahrenheit", //will be displayed on the y-axis
        data: [21203, 11203, 7211, 5111,4000,3993,3873,2203,2101,2021]
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
        <Chart options={options} type="bar" series={series} height="100%" width="95%" />
      </div>
    );
  }