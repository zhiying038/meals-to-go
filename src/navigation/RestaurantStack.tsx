import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Restaurants, RestaurantDetail } from "screens";

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
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="restaurants" component={Restaurants} />
      <Stack.Screen name="restaurantDetail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
};
