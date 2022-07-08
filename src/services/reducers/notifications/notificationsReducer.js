import { types } from "utils";

export const notificationsReducer = (state = [], action) => {
  switch (action.type) {
    case types.notificationSetFriends:
      return [...action.payload];

    case types.notificationAddFriend:
      return [...state, action.payload];

    case types.notificationClear:
      return [];

    default:
      return state;
  }
};
