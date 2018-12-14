import { groupBy } from "lodash";
export const findIssueById = (issues, id) => {
  if (issues.length > 0) {
    return issues.find(issue => issue.id === id);
  }
  return null;
};

// This function iterates the input which is an array based on keyName and returns the count of each label
// for ex: issues arr of size 5 with keyName as 'type' returns { close: 2 , open:1, reopen:2} based on the input
export const organizeChartData = (input, keyName) => {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    let type = input[i][keyName];
    result.hasOwnProperty(type)
      ? (result[type] = ++result[type])
      : (result[type] = 1);
  }
  return result;
};

export const groupIssues = arr => {
  return groupBy(arr, function(n) {
    return n.type;
  });
};
