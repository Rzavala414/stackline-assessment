import Header from './Components/Header/Header';
import SalesChart from './Components/SalesChart/SalesChart';
import ProductOverview from './Components/ProductOverview/ProductOverview';
import DataTable from './Components/DataTable/DataTable';
import data from './util/data.json';
import "./App.css";

const App = () => {
  // console.log(data)

  return (
    <>
      <Header />
      <div className="main-content">
        <ProductOverview data={data}/>
        <div className="bar">
          <SalesChart data={data}/>
          <DataTable sales={data.sales}  />
        </div>
      </div>
    </>
  );
}

export default App;
