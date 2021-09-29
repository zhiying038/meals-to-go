import React, { useState } from "react";
import { auth } from "config/firebase";
import { loginUserRequest, registerUserRequest } from "../api/auth";

export type ContextProps = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  error: string;
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

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onUserLogin,
        onUserRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
