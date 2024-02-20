"use client";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

interface LineBarChartProps {
  userData: any;
}

export default function LineBarChart({ userData }: LineBarChartProps) {
  const [dataSet, setDataSet] = useState([]);

  const data = {
    labels: dataSet?.map((el) => el.time),
    datasets: [
      {
        label: "Acceleration",
        data: dataSet?.map((point) => point.acceleration),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Acc",
        data: dataSet?.map((point) => point.acc),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Access",
        data: dataSet?.map((point) => point.access),
        borderColor: "rgb(7, 181, 21)",
        backgroundColor: "rgba(9, 100, 39, 0.5)",
      },
    ],
  };

  useState(() => {
    if (userData) {
      setDataSet(userData.datasets);
    }
  }, [userData]);

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
