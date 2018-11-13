import { SAVE_ISSUE } from "../actionTypes";
import { createIssue } from "../../api/issue";

const saveSuccess = issue => ({
  type: SAVE_ISSUE,
  payload: issue
});

export const saveIssue = (dispatch, issue) => {
  createIssue(issue);
  dispatch(saveSuccess(issue));
};
