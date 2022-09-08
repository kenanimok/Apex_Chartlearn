import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import ChartUi from "../../ui/chartUi";
import Allchart from "../../allChart/all";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <PrivateRoute exact component={ChartUi} path="/" />
        <PrivateRoute exact component={Allchart} path="/all" />
      </Routes>
    </BrowserRouter>
  );
}
