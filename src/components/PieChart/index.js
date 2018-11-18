import React, { PureComponent } from "react";
import * as d3 from "d3";
import PropTypes from "prop-types";
import Slice from "../Slice";

class PieChart extends PureComponent {
  render() {
    const height = window.innerHeight * 0.5;
    const width = window.innerWidth * 0.5;
    let { data, textlabels } = this.props;

    let pie = d3.pie()(data);
    let minViewportSize = Math.min(width, height);
    let outerRadius = (minViewportSize * 0.9) / 2;
    let innerRadius = 0;
    // If innerRadius is zero then it is PieChart
    // If it is half of it then it is a Donut
    return (
      <svg height="100%" width="100%">
        <g transform={`translate(${width / 2},${height / 2})`}>
          <Slice
            pie={pie}
            data={data}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            textlabels={textlabels}
          />
        </g>
      </svg>
    );
  }
}

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
  textlabels: PropTypes.array.isRequired
};

PieChart.defaultProps = {
  data: [],
  textlabels: []
};
export default PieChart;
