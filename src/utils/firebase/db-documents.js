import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export const createUserDocument = async (userId, user) => {
  const userRef = await getDoc(doc(getFirestore(), "users", userId));
  if (!userRef.exists()) {
    await setDoc(doc(getFirestore(), "users", userId), {
      friends: [],
      ...user,
    });
  }
  const friendsRef = await getDoc(
    doc(getFirestore(), "friendsrequest", userId)
  );
  if (!friendsRef.exists()) {
    await setDoc(doc(getFirestore(), "friendsrequest", userId), {
      friends: [],
    });
  }
};

export const getUserDocument = async (userId) => {
  const docRef = await getDoc(doc(getFirestore(), "users", userId));
  return docRef.exists() && docRef.data();
};
