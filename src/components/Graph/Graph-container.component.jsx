import React, { Component } from "react";
import GraphLine from './Graph-line.component'
import GraphDoughNut from './Graph-doughnut.component';

class GraphContainer extends Component {
  state = {
    chartDataLine: {},
    chartDataCompanies: {},
  };

  getIndividualData = () => {
    // Usually Ajax call here when fetching data from an API
    this.setState({
      chartDataLine: {
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
            label: 'Individuals',
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
      chartDataCompanies: {
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
    this.getIndividualData();
    /* this.getCompaniesData(); */
  }

  render() {
    const { chartDataLine } = this.state;

    return (
      <div className="chart">
        <GraphLine chartDataLine={chartDataLine} />
      </div>
    );
  }
}

export default GraphContainer;
