import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsContextProvider } from "./src/contexts/RestaurantsContext";
import { RootNavigator } from "./src/navigation";

const App = () => {
  return (
    <>
      <RestaurantsContextProvider>
        <RootNavigator />
      </RestaurantsContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
