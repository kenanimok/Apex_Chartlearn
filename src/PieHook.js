import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
function PiechartHook()
{
    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <Chart 
                type="donut"
                width={300}
                height={600}

                series={ [33,55,77,99,33,44] }                
                options={{
                        // title:{ text:"Student PieChart"
                        // } , 
                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"],
                      labels:['เยอรมัน','รัสเซีย','อินเดีย','มาเลเซีย','ออสเตเรีย','อื่นๆ']  ,                   
                      colors: ['#000000', '#767676', '#D5D5D5', '#BFBFBF','#9C9C9C','#3A3A3A'],
                      dataLabels: {
                        enabled: false
                      },
                      stroke: {
                        show: true,
                        width: 0,
                    },
                    legend:{
                        position: 'bottom',
                        itemMargin: {
                            horizontal: 11,
                            vertical: 0
                        },
                    },

                    tooltip: {
                        enabled: true,
                        custom: function({series, seriesIndex, dataPointIndex, w}) {
                          let allcun = series.reduce((val1,val2)=>val1+val2)
                           const country = w.config.labels[seriesIndex];
                           const result =    series[seriesIndex];
                          const caculate = (result/allcun)*100
                        return `<div><span> ${country} ${result} คน   (${caculate.toFixed(0)}%) </span></div>`
                      }
                    },
                  
                 }}
                 legend={{   
                show:false,
                horizontalAlign: 'bottom', 
                 position: 'bottom'

                }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default PiechartHook;