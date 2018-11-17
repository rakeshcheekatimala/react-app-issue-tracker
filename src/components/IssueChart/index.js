import React from 'react';
import * as d3 from "d3";
import { connect } from "react-redux";
import Slice from '../Slice';
import "./styles.css";
import { organizeChartData } from '../../utils';

class IssueChart extends React.Component {
  emptyIssues = () =>{
    return(
      <div className='zero-issues-chart'>
        <h1> No Issues Created to display the Pie-Chart</h1>
      </div>
    )
  }
  render() {
    const height = window.innerHeight*0.5;
    const width=window.innerWidth*0.5;
    let {issues} =  this.props;
    let data=[],textlabels=[];
    if(issues && issues.length>0) {
      let result = organizeChartData(issues,"type");
      textlabels = Object.keys(result);
      for (let i=0;i<textlabels.length;i++) {
        data.push(result[textlabels[i]]);
      }
      console.log('the data after for organizeChartData',data)
    }

    let pie = d3.pie()(data);
    let minViewportSize = Math.min(width, height);
    let outerRadius = (minViewportSize * .9) / 2;
    //let outerRadius = (width * .5) / 2;;
    let innerRadius = 0;
    // If innerRadius is zero then it is PieChart
    // If it is half of it then it is a Donut
    if(data.length===0){
      return this.emptyIssues()
    }
    else {
      return (
        <svg height="100%" width="100%">
          <g transform ={`translate(${width/2},${height/2})`}>
            <Slice pie={pie} data ={data} innerRadius={innerRadius} outerRadius={outerRadius} textlabels={textlabels}/>
          </g>
        </svg>
      );
    }

  }
}

function mapStateToProps(state) {
  return {
    issues: state.issue.issues
  };
}

export default connect(mapStateToProps,null)(IssueChart);
