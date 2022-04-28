import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import { authReducer, uiReducer, userDataReducer } from "services";

const composedEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  userData: userDataReducer,
});

export const store = createStore(
  rootReducer,
  composedEnhancers(applyMiddleware(thunkMiddleware))
);
