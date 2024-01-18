import React from 'react';
import { Line } from 'react-chartjs-2';
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

export const options = {
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

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'OCT', 'NOV', 'DEC'];

export const data = {
  labels,
  datasets: [
    {
      data: [5,34,6,5,5,67,43,5, 6, 7],
      borderColor: 'rgb(69, 168, 246)',
    },
    {
      data: [7, 4,743,6,55,4,345,4,489],
      borderColor: 'rgb(155, 166, 191)',
    },
  ],
};

const SalesChart = () => {
  return (
    <div className="graph container">
      <Line options={options} data={data} />
    </div>
  )
}

export default SalesChart;
