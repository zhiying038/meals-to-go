import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Restaurants } from "screens";

export type StacksList = {
  restaurants: undefined;
  restaurantDetail: undefined;
};

const Stack = createStackNavigator<StacksList>();

export const RestaurantNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="restaurants" component={Restaurants} />
      <Stack.Screen
        name="restaurantDetail"
        component={() => <Text>Restaurant Details</Text>}
      />
    </Stack.Navigator>
  );
};
