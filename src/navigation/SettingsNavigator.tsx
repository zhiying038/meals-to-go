import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Favourites, Settings } from "screens";

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerMode: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
  );
};
