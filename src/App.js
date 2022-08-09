import Allchart from './allChart/all';
import Corelayout from './components/layout/corelayout';
import Sidebar from './components/nav';
import Sider from './components/nav';
import logo from './logo.svg';
import PiechartHook from './PieHook';
import AreaChart from './ui/areaChart';
import Barchart from './ui/barchart';
import ChartUi from './ui/chartUi';
import Columnchart from './ui/Columnchart';



function App() {
  return (
    <div >

      <Corelayout>
      <ChartUi></ChartUi>
      </Corelayout>

      {/* <Allchart></Allchart> */}

      
    </div>
  );
}

export default App;
