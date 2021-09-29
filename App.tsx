import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { AuthenticationContextProvider } from "contexts/AuthenticationContext";
import { RootNavigator } from "./src/navigation";

const App = () => {
  return (
    <>
      <AuthenticationContextProvider>
        <RootNavigator />
      </AuthenticationContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
