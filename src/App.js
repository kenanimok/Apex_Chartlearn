import { BrowserRouter, Routes, Route } from "react-router-dom";
import Corelayout from "./components/layout/corelayout";
import ChartUi from "./pages/chartui/chartUi";
import Allchart from "./pages/allChart/all";
import Report from "./pages/reportdashboard/report";
import Form from "./pages/form/form";
import Froala_t from "./pages/froala/froala";

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
            <Route path="/form" element={<Form />} />
            <Route path="/froala" element={<Froala_t />} />
          </Routes>
        </Corelayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
