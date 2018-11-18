import uuidv1 from "uuid/v1";
export const createIssue = issue => {
  let issues = localStorage.getItem("issues");
  issues = JSON.parse(localStorage.getItem("issues") || "[]");
  issue.id = uuidv1();
  issues.push(issue);
  localStorage.setItem("issues", JSON.stringify(issues));
};

export const fetchIssues = () => {
  let issues = JSON.parse(localStorage.getItem("issues") || "[]");
  return issues;
};

export const updateIssueList = issue => {
  let issues = JSON.parse(localStorage.getItem("issues") || "[]");
  let index = issues.findIndex(item => item.id === issue.id);
  issues[index] = issue;
  localStorage.setItem("issues", JSON.stringify(issues));
  return issues;
};
