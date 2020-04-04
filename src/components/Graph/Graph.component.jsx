import React, { Component } from "react";
import { GraphDougnut, GraphLine } from "./Graph-types/Graph-types.component";

class Graph extends Component {
  state = {
    chartData: {
      labels: [
        "Jun'19",
        "Jul'10",
        "Aug'19",
        "Sep'19",
        "Oct'19",
        "Nov'19",
        "Dec'19",
      ],
      datasets: [
        {
          label: "Population",
          data: [0, 9, 3, 5, 2.5, 2.7, 2, 9.3, 7],
          backgroundColor: [
            "linear-gradient(90deg, rgb(78, 255, 207) 0%, rgb(8, 164, 188) 100%);",
          ],
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 3,
          hoverBorderColor: "#000",
        },
      ],
    },
  };

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: "right",
  };

  render() {
    return (
      <>
        <GraphLine chartData={this.state.chartData} title="Individuals"/>
      </>
    );
  }
}

export default Graph;
