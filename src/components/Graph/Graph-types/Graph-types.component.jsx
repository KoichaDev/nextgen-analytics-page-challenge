import React from "react";
import { Doughnut, Line } from "react-chartjs-2";


const GraphLine = ({ chartData, title }) => {
  return (
    <div className="chart">
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: { title },
            fontSize: 25,
          },
        }}
      />
    </div>
  );
};
const GraphDougnut = ({ chartData, title }) => {
  return (
    <div className="chart">
      <Doughnut
        chartData={chartData}
        options={{
          title: {
            display: true,
            text: { title },
            fontSize: 25,
          },
        }}
      />
    </div>
  );
};

export { GraphDougnut, GraphLine };