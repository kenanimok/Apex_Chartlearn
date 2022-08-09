import React ,{ useState, useEffect} from "react";
import styled from "styled-components";
import  Chart  from "react-apexcharts";
function PiechartHook()
{
    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <Charts 
                type="donut"
                width={300}
                height={600}

                // series={ [] }    
                series={ [33,55,77,99,33,44] }                
            
                options={{
                        // title:{ text:"Student PieChart"
                        // } , 
                        plotOptions: {
                          pie:{
                              donut: {
                                size: '80%',
                                // endigShape: "rounded",
                                // borderRadius: 10,
                              }
                            }
                            },
                          

                          stroke: {
                            show: true,
                            width: 0,
                            curve: 'smooth',
                            lineCap: 'round',

                          },

                        // pattern: {
                        //     style: 'circles',
                        // },

                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"],
                      labels:['เยอรมัน','รัสเซีย','อินเดีย','มาเลเซีย','ออสเตเรีย','อื่นๆ']  ,                   
                      colors: ['#000000', '#767676', '#D5D5D5', '#BFBFBF','#9C9C9C','#3A3A3A'],
                      dataLabels: {
                        enabled: false
                      },
                    //   stroke: {
                    //     show: true,
                    //     width: 0,
                    //     curve:'smooth',
                    //     lineCap: 'butt',

                    // },

                   fill:{
                    stroke: {
                        show:true,
                        lineCap: 'smooth'
                      },
                   },
                    legend:{
                        position: 'right',
                        itemMargin: {
                            horizontal: 11,
                            vertical: 0
                        },
                    },

                    tooltip: {
                        enabled: true,
                        custom: function({series, seriesIndex, dataPointIndex, w}) {
                            //    console.log('series', series)
                            //    console.log('seriesIndex', first)
                          let allcun = series.reduce((val1,val2)=>val1+val2)
                           const country = w.config.labels[seriesIndex];
                           
                           const result =    series[seriesIndex];
                          const caculate = (result/allcun)*100
                        return `<div><span> ${country} ${result} คน   (${caculate.toFixed(0)}%) </span></div>`
                      }
                    },
                    // total:{
                    //     show:true,
                    //     labels:"total"
                    // }
                  
                 }}
                 legend={{   
                show:false,
                horizontalAlign: 'bottom', 
                 position: 'bottom'

                }}
                >
                </Charts>
            </div>
        </React.Fragment>
    );
}
export default PiechartHook;

const Charts = styled(Chart)`
.apexcharts-series.apexcharts-pie-series{
   border-radius: 10px;
}
`