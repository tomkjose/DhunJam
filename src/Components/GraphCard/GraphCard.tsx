import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "./GraphCard.css";
import { GraphCardProps } from "../../Utils/interface";
Chart.register(CategoryScale);

const GraphCard: React.FC<GraphCardProps> = ({
  dataValues,
  amountCategory6,
  amountCategory7,
  amountCategory8,
  amountCategory9,
  amountCategory10,
}) => {
  const data = {
    labels: ["Custom", "Category 1", "Category 2", "Category 3", "Category 4"],
    datasets: [
      {
        backgroundColor: "#F0C3F1",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        barThickness: 40,
        data: [
          amountCategory6 ?? dataValues?.amount?.category_6,
          amountCategory7 ?? dataValues?.amount?.category_7,
          amountCategory8 ?? dataValues?.amount?.category_8,
          amountCategory9 ?? dataValues?.amount?.category_9,
          amountCategory10 ?? dataValues?.amount?.category_10,
        ],
      },
    ],
  };

  return (
    <div className="bar__chart">
      <Bar
        data={data}
        options={{
          indexAxis: "x",
          scales: {
            x: {
              grid: {
                display: true,
                color: (context) =>
                  context?.tick?.value === 0 ? "white" : "rgba(0,0,0,0.1)",
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: true,
                color: (context) =>
                  context?.tick?.value === 0 ? "white" : "rgba(0,0,0,0.1)",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            bar: {
              borderWidth: 2,
              borderRadius: 4,
              borderSkipped: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

export default GraphCard;
