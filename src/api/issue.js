import { uniqueId } from "lodash";
export const createIssue = issue => {
  console.log("saving the data to localStorage");
  let issues = localStorage.getItem("issues");
  issues = JSON.parse(localStorage.getItem("issues") || "[]");
  issue.id = uniqueId("issue_");
  issues.push(issue);
  localStorage.setItem("issues", JSON.stringify(issues));
  console.log(issues);
};
