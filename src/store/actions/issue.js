import { SAVE_ISSUE, PUSH_ISSUES, SET_ISSUE } from "../actionTypes";
import { createIssue, fetchIssues, updateIssueList } from "../../api/issue";

const saveSuccess = issue => ({
  type: SAVE_ISSUE,
  payload: issue
});

const pushIssues = issues => ({
  type: PUSH_ISSUES,
  payload: issues
});

export const saveIssue = (dispatch, issue) => {
  createIssue(issue);
  dispatch(saveSuccess(issue));
};

export const getIssues = dispatch => {
  let issues = fetchIssues();
  dispatch(pushIssues(issues));
};

export const setIssue = (dispatch, issue) => {
  dispatch({
    type: SET_ISSUE,
    payload: issue
  });
};

export const updateIssue = (dispatch, issue) => {
  let issues = updateIssueList(issue);
  dispatch(pushIssues(issues));
};
