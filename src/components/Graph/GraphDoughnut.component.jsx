import React, { Component } from "react";
import { Doughnut, Line } from "react-chartjs-2";

class GraphDoughNut extends Component {
  state = {
    chartData: {},
  };

  getChartData = () => {
    // Usually Ajax call here when fetching data from an API
    this.setState({
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
            label: this.props.label,
            data: [0, 9, 3, 5, 2.5, 2.7, 2, 9.3, 7],
            backgroundColor: ["#1A3E55"],
            borderWidth: 0,
            borderColor: "#4effa1",
          },
        ],
      },
    });
  };

  componentWillMount() {
    this.getChartData();
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };

  render() {
    return (
      <div className="chart">
        <Doughnut
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              label: this.props.displayLabel,
              position: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}

export default GraphDoughNut;
