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
      backgroundColor: 'rgba(0, 0, 0, 0)' // Set transparent background
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      data: [5, 6, 7],
      borderColor: 'rgb(69, 168, 246)',
    },
    {
      data: [7, 4, 2],
      borderColor: 'rgb(155, 166, 191)',
    },
  ],
};

const SalesChart = () => {
  return (
    <div className="graph">
      <Line options={options} data={data} />
    </div>
  )
}

export default SalesChart;
