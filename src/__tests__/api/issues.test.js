import { createIssue, fetchIssues, updateIssueList } from "../../api/issue";

test("test fetchIssues when localStorage is set []", () => {
  localStorage.setItem("issues", JSON.stringify([]));
  let issues = fetchIssues();
  expect(issues.length).toBe(0);
});

test("test createIssue , should return issues arr which issue added", () => {
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

test("test fetchIssues after createIssue is called", () => {
  let issues = fetchIssues();
  expect(issues.length).toBe(1);
});

test("test updateIssueList and verify the updated item", () => {
  let issues = fetchIssues();
  let issue = issues[0];
  let newtitle = "updated title";
  issue.title = newtitle;
  issues = updateIssueList(issue);
  expect(issues[0].title).toBe(newtitle);
});
