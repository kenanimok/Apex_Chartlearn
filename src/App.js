import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allchart from "./allChart/all";
import Corelayout from "./components/layout/corelayout";
import Router from "./components/routers";

import logo from "./logo.svg";
import PiechartHook from "./PieHook";
import AreaChart from "./ui/areaChart";
import Barchart from "./ui/barchart";
import ChartUi from "./ui/chartUi";
import Columnchart from "./ui/Columnchart";

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
          </Routes>
        </Corelayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
