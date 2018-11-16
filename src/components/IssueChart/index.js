import React from 'react';
import * as d3 from "d3";
import { connect } from "react-redux";
import Slice from '../Slice'
import { organizeChartData } from '../../utils';

class IssueChart extends React.Component {
  render() {
    const height = window.innerHeight;
    const width=window.innerWidth;
    let {issues} =  this.props;
    console.log('the data is ',issues)
    let data =[14,20,13];
    let textlabels = ['open','close','reopen']
    if(issues && issues.length>0) {
      let result = organizeChartData(issues,"type");
      data=[];
      textlabels = Object.keys(result);
      for (let i=0;i<textlabels.length;i++) {
        data.push(result[textlabels[i]]);
      }
      console.log('the data after for ',data)
    }

    let pie = d3.pie()(data);
    let minViewportSize = Math.min(width, height);
    let outerRadius = (minViewportSize * .9) / 2;
    //let outerRadius = (width * .5) / 2;;
    let innerRadius = 0;
    // If innerRadius is zero then it is PieChart
    // If it is half of it then it is a Donut
    return (
      <svg height="100%" width="100%">
        <g transform ={`translate(300,${outerRadius})`}>
          <Slice pie={pie} data ={data} innerRadius={innerRadius} outerRadius={outerRadius} textlabels={textlabels}/>
        </g>
      </svg>
    );
  }
}

function mapStateToProps(state) {
  return {
    issues: state.issue.issues
  };
}

export default connect(mapStateToProps,null)(IssueChart);
