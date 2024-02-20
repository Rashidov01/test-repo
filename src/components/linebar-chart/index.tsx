"use client";

import React, { useState, useEffect } from "react";
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
  const [dataSet, setDataSet] = useState<any[]>([]);

  const data = {
    labels: dataSet?.map((el: { time: string }) => el.time),
    datasets: [
      {
        label: "Acceleration",
        data: dataSet?.map(
          (point: { acceleration: number }) => point.acceleration
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Acc",
        data: dataSet?.map((point: { acc: number }) => point.acc),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Access",
        data: dataSet?.map((point: { access: number }) => point.access),
        borderColor: "rgb(7, 181, 21)",
        backgroundColor: "rgba(9, 100, 39, 0.5)",
      },
    ],
  };

  useEffect(() => {
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
