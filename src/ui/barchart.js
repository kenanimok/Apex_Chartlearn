import React from 'react'
import  Chart  from "react-apexcharts";
import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
  } from '@ant-design/icons';
function Barchart() {
   
    // const ken = HomeOutlined

  const  series = [
    {
        data: [
          {
            x: "Email",
            y: 70
          },
          {
            x: "Chat",
            y: 80
          },
          {
            x: "Voice",
            y: 90
          }
        ]
      }
    ]
    var options = {
        chart: {
          type: "bar",
        //   height: 100
        },
        plotOptions: {
          bar: {
            // borderRadius: 10,
            horizontal: true,
            distributed: true,
            startingShape: "flat",
            colors: {
                backgroundBarColors: ["#eee"],
                // backgroundBarOpacity: 1,
                backgroundBarRadius: 5
              }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          }
        },
        title: {
          text: "Customer Satisfaction"
        },
        grid: {
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        },
      
        legend: {
          show: false
        }
      };
  return (
    <div>
        <Chart options={options} type="bar" series={series}  height="100%" width="80%" ></Chart>
    </div>
  )
}

export default Barchart