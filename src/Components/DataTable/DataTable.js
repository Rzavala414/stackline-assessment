import './DataTable.css';
import { convertDateFormant, addDelimiter } from '../../util/helpers';

const DataTable = ({ sales }) => {

  return (
    <table className='container'>
      <thead>
        <tr>
          <th>Week Ending <span className='arrow'>▼</span></th>
          <th>Retail Sales <span className='arrow'>▼</span></th>
          <th>Wholesale Sales <span className='arrow'>▼</span></th>
          <th>Units Sold <span className='arrow'>▼</span></th>
          <th>Retailer Margin <span className='arrow'>▼</span></th>
        </tr>
      </thead>
      <tbody>
        {
          sales.map((sale, idx) => {
            console.log(addDelimiter(sale.retailSales))
            return (
              <tr key={sale + idx}>
                <td>{convertDateFormant(sale.weekEnding)}</td>
                <td>${addDelimiter(sale.retailSales)}</td>
                <td>${addDelimiter(sale.wholesaleSales)}</td>
                <td>{sale.unitsSold}</td>
                <td>${addDelimiter(sale.retailerMargin)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default DataTable;