import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { FaCog } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const RevenuePie = () => {
  const data = {
    labels: ["Dating", "Matrimony", "Study Abroad", "E commerce", "Job Portal"],
    datasets: [
      {
        data: [20, 30, 20, 15, 10],
        backgroundColor: [
          "#eb6b56",
          "#5faee3",
          "#3e5926",
          "#6b51ff",
          "#565656",
        ],
        hoverBackgroundColor: [
          "#d85d4b",
          "#4f9bd4",
          "#2e4820",
          "#5a45dd",
          "#424242",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#3c4325",
        font: {
          size: 12,
          weight: "bold",
        },
        formatter: (_, ctx) => {
          return ctx.chart.data.labels[ctx.dataIndex];
        },
        anchor: "end",
        align: "end",
        offset: 10,
      },
    },
  };

  return (
    <div className="max-w-md mx-auto bg-white p-10 rounded-2xl mt-10  shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Revenue by Module</h2>
        <FaCog className="text-xl cursor-pointer" />
      </div>
      <p className="text-sm text-gray-600">Click each area to see details</p>
      <div className="mt-4 ms-10 w-72">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};
