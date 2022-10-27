import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SummaryUser from "./pages/dashboard/summaryUser/summaryUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SummaryUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
