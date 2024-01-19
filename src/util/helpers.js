
export const generateSalesArray = (data) => {
  // const salesArray = [];
  
  // for (const sale of data.sales) {
  //   const { retailSales } = sale;
  //   salesArray.push(retailSales)
  // }

  // return salesArray;
}

/**
 * Converts the format of a date string from 'YYYY-MM-DD' to 'MM-DD-YY'.
 * 
 * @param {string} date - The input date string in the 'YYYY-MM-DD' format.
 * @returns {string} - The output is a date string in the 'MM-DD-YY' format.
*/
export const convertDateFormant = (date) => {
  const dateArray = date.split('-');
  const newDateFormat = `${dateArray[1]}-${dateArray[2]}-${dateArray[0].substring(2)}`;
  return newDateFormat;
} 

/**
 * Attaches a ',' to every third integer 
 * 
 * @param {string} value - The input value is a string of integers '3969483'
 * @returns {string} - The output is a string of integers with a ',' separating at every third number
*/
export const addDelimiter = (value) => {
  const formattedNumber = value.toLocaleString();
  return formattedNumber;
}