import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FaCog } from "react-icons/fa";

Chart.register(...registerables);

export const IncomesAndExpenses = () => {
  const data = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Income",
        data: [
          5000, 7000, 6500, 8000, 4000, 9000, 7500, 6200, 8800, 5600, 9100,
          7400, 6800, 7200, 6600, 8700, 5900, 5300, 9400, 8100, 7300, 8200,
          9700, 8500, 6000, 8900, 9200, 7100, 8400, 7800, 6300,
        ],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
      },
      {
        label: "Expenses",
        data: [
          4000, 5200, 4800, 6200, 3100, 7100, 5600, 4900, 7300, 4400, 7600,
          5500, 5100, 5800, 4700, 6900, 4200, 3600, 7700, 6400, 5300, 6500,
          8200, 7000, 4600, 7300, 7500, 5700, 6800, 6200, 5100,
        ],
        backgroundColor: "rgba(107, 73, 56, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: { display: false },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-10  w-[600px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="md:text-2xl font-bold">Incomes & Expenses</h2>
        <FaCog className="h-6 w-6  cursor-pointer" />
      </div>

      <div className="w-full">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-6 flex justify-around text-center border-t pt-4">
        <div>
          <p className="md:text-xl font-bold">$75,000</p>
          <p className="text-gray-500">Income</p>
        </div>
        <div>
          <p className="md:text-xl font-bold">$24,200</p>
          <p className="text-gray-500">Expenses</p>
        </div>
        <div>
          <p className="md:text-xl font-bold">$50,800</p>
          <p className="text-gray-500">Profit</p>
        </div>
      </div>
      <p className="text-gray-500 text-sm text-center py-2">Click here to see detailed report</p>
    </div>
  );
};
