import { createIssue, fetchIssues } from "../../api/issue";
import { findIssueById, organizeChartData } from "../../utils/index";

test("test fetchIssues when setItem is set to []", () => {
  localStorage.setItem("issues", JSON.stringify([]));
  let issues = fetchIssues();
  expect(issues.length).toBeDefined();
  expect(issues.length).toBe(0);
});

test("createIssue should return issues arr which issue added of size 1", () => {
  localStorage.setItem("issues", JSON.stringify([]));
  let issue = {
    title: "firebase setup",
    description: "firebase setup installation ,etc.",
    type: "open",
    id: ""
  };
  createIssue(issue);
  let issues = fetchIssues();
  expect(issues).toBeDefined();
});

test("createIssue should return updated array with size 2", () => {
  let issue = {
    title: "jest setup",
    description: "jest setup and integration of unit test cases for react app",
    type: "close",
    id: ""
  };
  createIssue(issue);
  let issues = fetchIssues();
  expect(issues.length).toBe(2);
});

test("after createIssues,findIssueById should return issue with id passed", () => {
  let issues = fetchIssues();
  let id = issues[0].id;
  expect(id).toBeDefined();
  let issue = findIssueById(issues, id);
  expect(issue.id).toBe(id);
});

test("organizeChartData based on keyName passed for the input arr ,should return close:1 , open:1 ", () => {
  let issues = fetchIssues();
  let data = organizeChartData(issues, "type");
  expect(data).toBeDefined();
  expect(data.open).toBe(1);
  expect(data.close).toBe(1);
});
