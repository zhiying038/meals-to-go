import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticationContext } from "contexts/AuthenticationContext";
import { AuthNavigator } from "./AuthNavigator";
import { TabNavigator } from "./TabNavigator";

type StackList = {
  auth: undefined;
  app: undefined;
};

const Stack = createStackNavigator<StackList>();

const MainStack = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <Stack.Navigator
      initialRouteName={!isAuthenticated ? "auth" : "app"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="auth"
        options={{ headerShown: false }}
        component={AuthNavigator}
      />
      <Stack.Screen
        name="app"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
