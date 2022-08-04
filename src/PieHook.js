import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
function PiechartHook()
{
   const [stdudentSubject, setStudentsubject]= useState([]);
   const [studentMarks, setStudentMarks]= useState([]);

//    useEffect( ()=>{
//        const sSubject=[];
//        const sMarks=[];
//        const getStudentdata= async()=>{
//        const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
//        const resData= await reqData.json();       
//        for(let i=0; i< resData.length; i++)
//        {
//         sSubject.push(resData[i].subject);
//         sMarks.push(parseInt(resData[i].marks));
//        }
//        setStudentsubject(sSubject);
//        setStudentMarks(sMarks);
//         //console.log(resData); 
//        }

//     getStudentdata();

//    },[]);

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <Chart 
                type="donut"
                width={300}
                height={600}

                series={ [33,55,77,99] }                
                options={{
                        // title:{ text:"Student PieChart"
                        // } , 
                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"],
                      labels:['usa','usb','china','thia','xxx','dsfd']  ,                   
                      colors: ['#000000', '#767676', '#D5D5D5', '#BFBFBF'],
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
                            horizontal: 10,
                            vertical: 10
                        },
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