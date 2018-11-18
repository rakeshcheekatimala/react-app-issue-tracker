import { SAVE_ISSUE, EDIT_ISSUE, PUSH_ISSUES, SET_ISSUE } from "../actionTypes";
import { initialState } from "./context";

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ISSUE: {
      return state;
    }
    case EDIT_ISSUE: {
      return state;
    }
    case PUSH_ISSUES: {
      return { ...state, issues: action.payload };
    }
    case SET_ISSUE: {
      return {
        ...state,
        issue: action.payload
      };
    }
    default:
      return state;
  }
};

export default issueReducer;
