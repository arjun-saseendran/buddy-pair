import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { FaCog } from "react-icons/fa";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: Array.from({ length: 31 }, (_, i) => i + 1),
  datasets: [
    {
      data: [
        320, 450, 120, 300, 150, 250, 100, 400, 290, 350, 200, 330, 270, 410,
        190, 220, 370, 130, 90, 430, 280, 310, 150, 390, 230, 260, 340, 140,
        360, 180, 240,
      ],
      borderColor: "blue",
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      pointBackgroundColor: "#ffffff",
      pointBorderWidth: 1,
      borderWidth: 1,
      pointRadius: 3,
      tension: 0.3,
    },
    {
      data: [
        450, 300, 0, 450, 200, 120, 300, 230, 370, 100, 250, 190, 330, 410, 90,
        260, 400, 290, 50, 270, 140, 340, 80, 180, 280, 430, 150, 320, 240, 390,
        110,
      ],
      borderColor: "black",
      backgroundColor: "rgba(67, 56, 202, 0.2)",
      pointBackgroundColor: "#ffffff",
      pointBorderWidth: 1,
      borderWidth: 1,
      pointRadius: 3,
      tension: 0.3,
    },
  ],
};

export const CustomerArrival = () => {
  return (
    <div className="bg-white shadow-lg mx-auto mt-10 rounded-2xl p-5 w-[700px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-10">Customer Arrival</h2>
        <FaCog className="w-6 h-6 cursor-pointer text-black" />
      </div>
      <div className="w-full h-80">
        <Line
          className="border"
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                display: false,
              },
            },
            scales: {
              y: {
                suggestedMax: 600,
                beginAtZero: true,
                ticks: {
                  stepSize: 150,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
