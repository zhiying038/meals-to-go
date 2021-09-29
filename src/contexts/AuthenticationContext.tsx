import React, { useState } from "react";
import firebase from "firebase";
import { auth } from "config/firebase";
import {
  loginUserRequest,
  registerUserRequest,
  logoutUserRequest,
} from "../api/auth";

export type ContextProps = {
  user: firebase.User;
  error: string;
  isLoading: boolean;
  isAuthenticated: boolean;
  onUserLogout: () => void;
  onUserLogin: (email: string, password: string) => void;
  onUserRegister: (email: string, password: string) => void;
};

export const AuthenticationContext = React.createContext<ContextProps>(null);

export const AuthenticationContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  auth.onAuthStateChanged((u) => {
    if (u) {
      setUser(u);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onUserLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginUserRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onUserRegister = (email: string, password: string) => {
    setIsLoading(true);
    registerUserRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onUserLogout = () => {
    setUser(null);
    logoutUserRequest();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onUserLogin,
        onUserLogout,
        onUserRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
