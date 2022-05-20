import { toast } from "react-toastify";
import { setData } from "services";
import { errors, toastifyOptions, types } from "utils";
import {
  getDoc,
  getDocs,
  getFirestore,
  collection,
  where,
  query,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

export const startAddFriend = (email) => {
  return async (dispatch, getState) => {
    try {
      let user;
      const { auth } = getState();
      const docSnap = await getDoc(doc(getFirestore(), "users", auth.uid));
      if (docSnap.exists()) user = docSnap.data();

      if (user.friends.find((friend) => friend.email === email)) {
        toast.error("User already exists in your friend list", toastifyOptions);
        return;
      }

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

export const removeNotification = (user) => {
  return async (dispatch, getState) => {
    try {
      const { auth, notifications } = getState();
      const { uid } = auth;
      const newNotifications = notifications.filter((notificationUser) => {
        return notificationUser.uid !== user.uid;
      });

      await updateDoc(doc(getFirestore(), "friendsrequest", uid), {
        friends: newNotifications,
      });
      dispatch(setFriends(newNotifications));
    } catch (err) {
      toast.error(errors[err.code], toastifyOptions);
      console.log(err);
    }
  };
};

export const acceptFriendRequest = (user) => {
  return async (dispatch, getState) => {
    try {
      const { auth, userData } = getState();
      const { uid } = auth;
      const friendExists = userData.friends.find(
        (friend) => friend.uid === user.uid
      );

      const newPromise = Promise.all([
        updateDoc(doc(getFirestore(), "users", uid), {
          friends: arrayUnion(user),
        }),
        updateDoc(doc(getFirestore(), "users", user.uid), {
          friends: arrayUnion(auth),
        }),
      ]);

      await newPromise;

      dispatch(removeNotification(user)); // remove user from notification

      if (!friendExists) {
        const newUserData = {
          ...userData,
          friends: [...userData.friends, user],
        };
        dispatch(setData(newUserData)); // add user to sidebar friend list
      }
    } catch (err) {
      toast.error(errors[err.code], toastifyOptions);
      console.log(err);
    }
  };
};

export const rejectFriendRequest = (user) => {
  return async (dispatch) => {
    try {
      dispatch(removeNotification(user));
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
