import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

// createStore is used for creating the store object.
// applyMiddleware allows to use thunk middleware

export function configureStore(initialState = {}) {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
