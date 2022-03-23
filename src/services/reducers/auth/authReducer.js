import { types } from "utils/types/types";

// {
//   uid: "aXskmS98sd9NXsdFs31fF92",
//   username: "username",
//   name: "name",
//   email: "mail@mail.com",
// }

export const authReducer = (state = {}, action) => {
  switch (action?.type) {
    case types.authLogin:
      return {
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
        img: action.payload.img,
      };

    case types.authLogout:
      return {};

    default:
      return state;
  }
};
