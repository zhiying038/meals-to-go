import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { LocationContextProvider } from "./src/contexts/LocationContext";
import { RestaurantsContextProvider } from "./src/contexts/RestaurantsContext";
import { RootNavigator } from "./src/navigation";

const App = () => {
  return (
    <>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <RootNavigator />
        </RestaurantsContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
