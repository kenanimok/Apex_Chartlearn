import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SummaryUser from "./pages/dashboard/summaryUser/summaryUser";
import MixedChart from "./components/chart/mixchart/mixchart";
import List from "./pages/tablePage/list/list";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SummaryUser />} />
          <Route path="/mix" element={<MixedChart />} />
          <Route path="/table" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
