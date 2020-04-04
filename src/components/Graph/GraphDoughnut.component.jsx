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
            backgroundColor: ["#1CFBE4", "#FF55EE", ],
            hoverBackgroundColor: ["#1CFBE4", "#FF55EE"],
          },
        ],

      },
    });
  };

  componentWillMount() {
    this.getData();
  }

  static defaultProps = {
    displayTitle: true,
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
