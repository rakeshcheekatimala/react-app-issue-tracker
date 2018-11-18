import React from "react";
import * as d3 from "d3";

function translate(x, y) {
  return `translate(${x}, ${y})`;
}

const Slice = props => {
  let { pie, innerRadius, outerRadius, textlabels } = props;
  let { data } = props;
  let arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
  //let interpolate = d3.interpolateRgb('#eaaf79','#bc3358');
  let interpolate = d3.schemeCategory10;
  return pie.map((slice, index) => {
    let sliceColor = interpolate[index];
    return (
      <g key={index}>
        <path d={arc(slice)} fill={sliceColor} />
        <text
          dy=".35em"
          transform={translate(...arc.centroid(slice))}
          style={{
            textAnchor: "middle",
            fill: "#fff",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          {data[index]}-{textlabels[index]}
        </text>
      </g>
    );
  });
};

export default Slice;
