import './DataTable.css';

const DataTable = ({ sales }) => {

  return (
    <table className="container">
      <thead>
        <tr>
          <th>Week Ending</th>
          <th>Retail Sales</th>
          <th>Wholesale Sales</th>
          <th>Units Sold</th>
          <th>Retailer Margin</th>
        </tr>
      </thead>
      <tbody>
        {
          sales.map((sale, idx) => {
            return (
              <tr key={sale + idx}>
                <td>{sale.weekEnding}</td>
                <td>${sale.retailSales}</td>
                <td>${sale.wholesaleSales}</td>
                <td>{sale.unitsSold}</td>
                <td>${sale.retailerMargin}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default DataTable;