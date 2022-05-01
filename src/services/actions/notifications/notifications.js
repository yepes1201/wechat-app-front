import { toast } from "react-toastify";
import { errors, toastifyOptions, types } from "utils";
import {
  getDocs,
  getFirestore,
  collection,
  where,
  query,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

export const startAddFriend = (email) => {
  return async (dispatch, getState) => {
    try {
      const { auth } = getState();
      const q = query(
        collection(getFirestore(), "users"),
        where("email", "==", email)
      );
      const querySnapshots = await getDocs(q);
      let friend;
      querySnapshots.forEach((doc) => {
        friend = doc.data();
      });
      if (friend) {
        await updateDoc(doc(getFirestore(), "friendsrequest", friend.uid), {
          friends: arrayUnion(auth),
        });
        toast.success("Friend request sent", toastifyOptions);
      } else {
        toast.error("User not found", toastifyOptions);
      }
    } catch (err) {
      toast.error(errors[err.code], toastifyOptions);
      console.log(err);
    }
  };
};

export const clearNotifications = () => {
  return {
    type: types.notificationClear,
  };
};
export const addFriend = (friend) => {
  return {
    type: types.notificationAddFriend,
    payload: friend,
  };
};

export const setFriends = (friends) => {
  return {
    type: types.notificationSetFriends,
    payload: friends,
  };
};
