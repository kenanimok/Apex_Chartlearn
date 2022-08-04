import React from 'react'
import PiechartHook from '../PieHook'
import { Card } from "antd";
import Columnchart from '../ui/Columnchart';
import AreaChart from '../ui/areaChart';


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
    </>
  )
}
