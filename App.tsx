import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Restaurants } from "./src/screens";

const App = () => {
  return (
    <>
      <Restaurants />
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
