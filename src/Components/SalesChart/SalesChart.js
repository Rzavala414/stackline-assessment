import { useEffect, useState } from 'react';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { generateSalesArray } from '../../util/helpers';
import "./SalesChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  elements: {
    point: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      align: "start",
      text: 'Retail Sales',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      }
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false
      }
    }
  }
};


const SalesChart = ({ data }) => {
  const [d, setD] = useState(null);

  const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'OCT', 'NOV', 'DEC'];

  const dataOptions = {
    labels,
    datasets: [
      {
        data: d,
        borderColor: 'rgb(69, 168, 246)',
      },
    ],
  };

  useEffect(() => {
    // const salesArray = generateSalesArray(data);
    // setD(salesArray)
    // console.log('ddf',d)
  },[])

  return (
    <div className="container graph-container">
      <Line options={options} data={dataOptions} />
    </div>
  )
}

export default SalesChart;
