import React, { Component } from "react";
import GraphLine from './GraphLine.component'
import GraphDoughNut from './GraphDoughnut.component';

class GraphState extends Component {
  state = {
    chartData: {},
  };

  getIndividualData = () => {
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
            backgroundColor: this.props.bgColor,
            borderWidth: 0,
            borderColor: "#4effa1",
          },
        ],
      },
    });
  };

  getCompaniesData = () => {
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
            backgroundColor: this.props.bgColor,
            borderWidth: 0,
            borderColor: "#4effa1",
          },
        ],
      },
    });
  };

  componentWillMount() {
    this.getChartData();
    this.getCompaniesData();
  }

  render() {
    return (
      <div className="chart">
        <GraphLine data={this.state.chartData} />
        <GraphLine data={this.state.chartData} />
      </div>
    );
  }
}

export default GraphState;
