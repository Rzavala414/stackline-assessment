import Header from './Components/Header/Header';
import LineGraph from './Components/LineGraph/LineGraph';
import ProductOverview from './Components/ProductOverview/ProductOverview';
import DataTable from './Components/DataTable/DataTable';
import data from './util/data.json';
import "./App.css";

const App = () => {

  return (
    <>
      <Header />
      <div className="main-content">
        <ProductOverview data={data}/>
        <div className="bar">
          <LineGraph sales={data.sales}/>
          <DataTable sales={data.sales}  />
        </div>
      </div>
    </>
  );
}

export default App;
