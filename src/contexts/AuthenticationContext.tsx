import React from "react";
import firebase from "firebase/app";
import {
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "config/firebase";

export type ContextProps = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  error: firebase.FirebaseError;
  onUserLogin: (email: string, password: string) => void;
  onUserRegister: (email: string, password: string) => void;
};

export const AuthenticationContext = React.createContext<ContextProps>(null);

export const AuthenticationContextProvider: React.FC = ({ children }) => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword, , newLoading, newError] =
    useCreateUserWithEmailAndPassword(auth);

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading: loading || newLoading,
        error: error || newError,
        onUserLogin: signInWithEmailAndPassword,
        onUserRegister: createUserWithEmailAndPassword,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
