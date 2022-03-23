export const returnUser = (firebaseUser, name = null) => {
  return {
    uid: firebaseUser.uid,
    name: name || firebaseUser.displayName,
    email: firebaseUser.email,
    img: firebaseUser.photoURL,
  };
};
