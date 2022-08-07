import React from 'react'
import PiechartHook from '../PieHook'
import { Card } from "antd";
import Columnchart from '../ui/Columnchart';
import AreaChart from '../ui/areaChart';
import Barchart from '../ui/barchart';
import styled from 'styled-components'

export default function Allchart() {
  return (
    <>
    <Card>
    <PiechartHook></PiechartHook>
    </Card>
    <Card>
        <Columnchart></Columnchart>
    </Card>
    <Card>
        <AreaChart></AreaChart>
    </Card>
    <Card style={{display:'inline'}}>
      <Barchart></Barchart>
    </Card>
    <Card>
      <Progress >
      <div class="bar albanian" >91%</div>
      </Progress>
    </Card>
    </>
  )
}

const Progress = styled.div`

   border: 1px solid #EDEDED;
   width: 20em;
   border-radius: 4px;
   box-shadow: 0 0 3px #B0B0;
   backdrop-filter: blur(2px) brightness(101%);

   .bar {
   width: 20em;
   background: forestgreen;
   box-shadow: inset 0px 12px 1.7px #FFFFFF33;
   border-radius: 3px;
   color: white;
   text-align: center;
}

.bar.albanian {
  width: 91%;

   background: tomato;
}

`
