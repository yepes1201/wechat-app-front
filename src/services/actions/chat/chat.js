import { createChat, types } from "utils";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc,
  where,
  query,
} from "firebase/firestore";

export const startActiveChat = (auth, user) => {
  return async (dispatch, getState) => {
    try {
      const q = query(
        collection(getFirestore(), "chats"),
        where("users", "array-contains", auth.uid)
      );
      const querySnapshots = await getDocs(q);

      let foundFriend = false;
      let chat;
      if (querySnapshots.docs.length > 0) {
        // If chat exists, get the chat
        querySnapshots.forEach((doc) => {
          const data = doc.data();
          if (data.users.includes(user.uid)) {
            chat = { ...data, id: doc.id };
            foundFriend = true;
            return;
          }
        });
        if (!foundFriend) {
          // If chat doesn't exist, create one
          chat = await createChat(auth.uid, user.uid);
        }
      } else {
        // If it's users first time, create one
        chat = await createChat(auth.uid, user.uid);
      }
      dispatch(activeChat(chat, user)); // Set chat as active
    } catch (err) {
      console.log(err);
    }
  };
};

export const startSendMessage = (message, chatId) => {
  return async (dispatch, getState) => {
    try {
      const { auth, chat } = getState();
      const { content } = chat;
      const { messages } = content;
      const newMessages = [...messages, message];
      const newChat = {
        ...chat,
        content: {
          ...content,
          messages: newMessages,
        },
      };
      await updateDoc(doc(getFirestore(), `chats/${chatId}`), {
        messages: newMessages,
      });
      dispatch(addMessageLocal(newChat));
    } catch (err) {
      console.log(err);
    }
  };
};

const addMessageLocal = (chat) => {
  return {
    type: types.chatAddMessage,
    payload: chat,
  };
};

const activeChat = (chat, friend) => {
  return {
    type: types.chatActive,
    payload: { content: chat, friend },
  };
};
