import React from "react";
import { Line } from "react-chartjs-2";

const GraphLine = ({ chartDataLine, chartDataCompanies }) => {
  return (
    <div className="chart">
      <Line
        data={chartDataLine === 'individualData'}
        options={{
          title: {
            display: true,
            text: "Individuals",
            fontSize: 25,
          },
        }}
      />
    </div>
  );
};

export default GraphLine;
