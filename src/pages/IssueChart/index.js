import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./styles.css";
import { organizeChartData } from "../../utils";
import PieChart from "../../components/PieChart";

class IssueChart extends React.Component {
  emptyIssues = () => {
    return (
      <div className="zero-issues-chart">
        <h1> No Issues Created to display the Pie-Chart</h1>
      </div>
    );
  };
  render() {
    let data = [],
      textlabels = [];
    let { issues } = this.props;
    if (issues && issues.length > 0) {
      let result = organizeChartData(issues, "type");
      textlabels = Object.keys(result);
      for (let i = 0; i < textlabels.length; i++) {
        data.push(result[textlabels[i]]);
      }
    }
    if (data.length === 0) {
      return this.emptyIssues();
    } else {
      return <PieChart data={data} textlabels={textlabels} />;
    }
  }
}

function mapStateToProps(state) {
  return {
    issues: state.issue.issues
  };
}

IssueChart.propTypes = {
  issues: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  null
)(IssueChart);
