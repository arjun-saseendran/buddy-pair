import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler,
);

export const BalanceAnalytics = () => {
  const [selectedMonth, setSelectedMonth] = useState("Jul");

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const expenseData = [10, 50, 80, 40, 20, 60, 70, 50, 40, 60, 90, 70];
  const incomeData = [20, 30, 50, 30, 40, 70, 90, 60, 50, 80, 100, 60];

  const data = {
    labels,
    datasets: [
      {
        label: "Expense",
        data: expenseData,
        borderColor: "#FBBF24",
        backgroundColor: "rgba(251, 191, 36, 0.1)",
        pointBackgroundColor: labels.map((m) =>
          m === selectedMonth ? "#FBBF24" : "transparent",
        ),
        pointBorderColor: labels.map(() => "transparent"),
        pointRadius: labels.map((m) => (m === selectedMonth ? 6 : 0)),
        pointBorderWidth: labels.map(() => 0),
        fill: true,
        tension: 0.4,
      },
      {
        label: "Income",
        data: incomeData,
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        pointBackgroundColor: labels.map((m) =>
          m === selectedMonth ? "#EF4444" : "transparent",
        ),
        pointBorderColor: labels.map(() => "transparent"),
        pointRadius: labels.map((m) => (m === selectedMonth ? 6 : 0)),
        pointBorderWidth: labels.map(() => 0),
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: { drawTicks: false, color: "#E5E7EB", borderDash: [6, 6] },
      },
      y: {
        grid: { display: false },
        beginAtZero: true,
        ticks: { stepSize: 25, max: 100 },
      },
    },
  };

  return (
    <div className="mx-auto p-4 mt-4 ms-14  w-[255px]  md:w-[1300px] xl:w-full xl:ms-28  max-w-7xl md:p-6 bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-6">
        <div className="text-xl  font-bold text-gray-800 mb-4 md:mb-0">
          Balance Analytics
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="text-center">
            <div className="text-yellow-500 font-semibold">Expense</div>
            <div className="font-bold">1,245</div>
          </div>
          <div className="text-center">
            <div className="text-red-500 font-semibold">Income</div>
            <div className="font-bold">1,356</div>
          </div>
          <select
            className="border-2 text-blue-800 border-blue-800 px-3 py-1 rounded-xl text-sm focus:ring focus:ring-indigo-300"
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {labels.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="relative w-full h-[200px] xl:h-[300px] md:h-[400px] md:my-6">
        <Line data={data} options={options} />
        {selectedMonth && (
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-indigo-600 text-white md:px-3 py-1 rounded-md text-xs">
            ${incomeData[labels.indexOf(selectedMonth)]} <br />
            {selectedMonth} 2025
          </div>
        )}
      </div>
    </div>
  );
};
