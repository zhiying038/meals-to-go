import React from "react";
import * as firebase from "firebase/app";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FirebaseApp } from "config/firebase";

export type ContextProps = {
  isLoading: boolean;
  user: any;
  error: firebase.default.FirebaseError;
  onUserLogin: (email: string, password: string) => void;
};

export const AuthenticationContext = React.createContext<ContextProps>(null);

export const AuthenticationContextProvider: React.FC = ({ children }) => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(FirebaseApp.auth());

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading: loading,
        error,
        onUserLogin: signInWithEmailAndPassword,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
