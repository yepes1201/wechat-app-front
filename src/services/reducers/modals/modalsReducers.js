import { types } from "utils";

export const modalsReducers = (state = {}, action) => {
  switch (action.type) {
    case types.modalsOpenAddFriend:
      return {
        addFriend: true,
      };
    case types.modalsCloseAddFriend:
      return {
        addFriend: false,
      };
    default:
      return state;
  }
};
