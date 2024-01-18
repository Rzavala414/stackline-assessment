import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import SalesChart from './Components/SalesChart/SalesChart';
import ProductOverview from './Components/ProductOverview/ProductOverview';
import data from './util/data.json';

const App = () => {
  console.log(data)

  return (
    <>
      <Header />
      <div className="content">
        <ProductOverview data={data}/>
        <SalesChart/>
      </div>
    </>
  );
}

export default App;
