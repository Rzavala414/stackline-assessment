import './DataTable.css';

const DataTable = ({ sales }) => {

  return (
    <table className="container">
      <thead>
        <tr>
          <th>Week Ending <span class="arrow">▼</span></th>
          <th>Retail Sales <span class="arrow">▼</span></th>
          <th>Wholesale Sales <span class="arrow">▼</span></th>
          <th>Units Sold <span class="arrow">▼</span></th>
          <th>Retailer Margin <span class="arrow">▼</span></th>
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