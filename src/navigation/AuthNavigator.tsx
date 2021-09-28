import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Introduction, Login } from "screens";

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName="introduction"
    >
      <AuthStack.Screen name="introduction" component={Introduction} />
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="register" component={() => null} />
    </AuthStack.Navigator>
  );
};
