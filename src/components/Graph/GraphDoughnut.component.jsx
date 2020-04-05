import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class GraphDoughNut extends Component {
  state = {
    chartData: {},
  };

  getData = () => {
    // Usually Ajax call here when fetching data from an API
    this.setState({
      chartData: {
        labels: ["Individual: 284", "Companies: 364"],
        datasets: [
          {
            data: [364, 284],
            backgroundColor: ["#ff56ee", "#1bfbe4"],
            hoverBackgroundColor: ["#ff56ee", "#1bfbe4"],
            borderWidth: 0,
          },
        ],
      },
    });
  };

  componentWillMount() {
    this.getData();
  }

  static defaultProps = {
    displayTitle: false,
    displayLegend: true,
    legendPosition: "right",
  };

  render() {
    const { chartData } = this.state;

    return (
      <div className="chart">
        <Doughnut
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            cutoutPercentage: 85,
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: 15,
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
