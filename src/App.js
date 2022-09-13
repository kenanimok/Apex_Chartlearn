import { BrowserRouter, Routes, Route } from "react-router-dom";
import Corelayout from "./components/layout/corelayout";
import ChartUi from "./pages/chartui/chartUi";
import Allchart from "./pages/allChart/all";
import Report from "./pages/reportdashboard/report";

function App() {
  return (
    <div>
      {/* <Corelayout>
        <ChartUi></ChartUi>
      </Corelayout> */}

      <BrowserRouter>
        <Corelayout>
          <Routes>
            <Route path="/" element={<ChartUi />}></Route>
            <Route path="/all" element={<Allchart />}></Route>
            <Route path="/report" element={<Report />} />
          </Routes>
        </Corelayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
