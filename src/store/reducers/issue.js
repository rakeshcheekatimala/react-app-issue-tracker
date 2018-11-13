import { SAVE_ISSUE, EDIT_ISSUE } from "../actionTypes";
import { initialState } from "./context";

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ISSUE: {
      console.log("saveIssue reducer");
      return state;
    }
    case EDIT_ISSUE: {
      console.log("editIssue reducer");
      return state;
    }

    default:
      return state;
  }
};

export default issueReducer;
