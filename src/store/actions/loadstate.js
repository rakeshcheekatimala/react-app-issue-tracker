import { INITIALISESTATE } from "../actionTypes";

const intializeState = () => ({
  INITIALISESTATE
});
export const loadState = (dispatch, issue) => {
  dispatch(intializeState());
};
