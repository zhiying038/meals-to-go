import Auth from "firebase/auth";
import { auth } from "config/firebase";

export const loginUser = (email: string, password: string) => {
  return Auth.signInWithEmailAndPassword(auth, email, password);
};
