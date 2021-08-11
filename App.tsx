import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RootNavigator } from "./src/navigation";

const App = () => {
  return (
    <>
      <RootNavigator />
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
