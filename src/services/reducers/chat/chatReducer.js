import { types } from "utils";

export const chatReducer = (state = null, action) => {
  switch (action.type) {
    case types.chatActive:
      return action.payload;

    case types.chatAddMessage:
      return action.payload;

    case types.chatDeactive:
      return null;

    default:
      return state;
  }
};
