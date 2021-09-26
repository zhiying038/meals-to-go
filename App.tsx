import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FavouriteContextProvider } from "./src/contexts/FavouriteContext";
import { LocationContextProvider } from "./src/contexts/LocationContext";
import { RestaurantsContextProvider } from "./src/contexts/RestaurantsContext";
import { RootNavigator } from "./src/navigation";

const App = () => {
  return (
    <>
      <FavouriteContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <RootNavigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouriteContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
