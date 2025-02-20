import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [4000, 5000, 4500, 6000, 7000, 8000],
      borderColor: "#4F46E5",
      borderWidth: 2,
      fill: false,
      tension: 0.4,
    },
  ],
};

const ChartComponent = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;
