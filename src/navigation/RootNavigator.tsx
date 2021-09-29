import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "contexts/AuthenticationContext";
import { AuthNavigator } from "./AuthNavigator";
import { TabNavigator } from "./TabNavigator";

export const RootNavigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
