import firebase from "firebase";

export const loginUserRequest = (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const registerUserRequest = (email: string, password: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
