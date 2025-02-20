import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required chart elements
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [400, 800, 600, 900, 700, 1200],
      backgroundColor: "rgba(79, 70, 229, 0.2)", // Purple tint
      borderColor: "#4F46E5", // Purple
      borderWidth: 2,
      pointBackgroundColor: "#4F46E5",
      pointBorderColor: "#fff",
      pointRadius: 5,
      tension: 0.4, // Smooth curve
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "#374151", // Gray-700 text
      },
    },
    tooltip: {
      backgroundColor: "#4F46E5",
      titleColor: "#fff",
      bodyColor: "#fff",
    },
  },
  scales: {
    x: {
      ticks: { color: "#4B5563" }, // Gray-600
      grid: { display: false },
    },
    y: {
      ticks: { color: "#4B5563" },
      grid: { color: "rgba(0, 0, 0, 0.1)" }, // Light grid
    },
  },
};

const MyChart = () => {
  return (
    <div className=" w-[100%] p-4">
      <h2 className="text-xl font-bold dark:text-gray-300 text-gray-700 mb-4">📈 Monthly Sales</h2>
      <div className="h-100 w-auto text-slate-300">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MyChart;
