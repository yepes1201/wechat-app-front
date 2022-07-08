import { types } from "utils";

export const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case types.userDataSet:
      return {
        ...state,
        ...action.payload,
      };
    case types.userDataClear:
      return {};
    default:
      return state;
  }
};
