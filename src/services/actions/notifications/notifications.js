import { types } from "utils";

export const addFriend = (friend) => {
  return {
    type: types.notificationAddFriend,
    payload: friend,
  };
};
