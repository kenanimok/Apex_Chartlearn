import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SummaryUser from "./pages/dashboard/summaryUser/summaryUser";
import MixedChart from "./components/chart/mixchart/mixchart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SummaryUser />} />
          <Route path="/mix" element={<MixedChart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
