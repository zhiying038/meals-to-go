import React from "react";
import { View } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { tw } from "config/tailwind";
import { colors } from "config/theme";
import { RestaurantNavigator } from "navigation/RestaurantStack";
import { Map, Settings } from "screens";

export type TabsList = {
  restaurant: undefined;
  map: undefined;
  settings: undefined;
};

const TabIconList = {
  restaurant: "md-restaurant",
  map: "md-map",
  settings: "md-settings",
};

const Tab = createBottomTabNavigator<TabsList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="restaurant"
      tabBar={(props) => {
        return (
          <View style={tw("inset-x-0 bottom-0 absolute")}>
            <BottomTabBar {...props} />
          </View>
        );
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = TabIconList[route.name];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      })}
    >
      <Tab.Screen
        name="restaurant"
        component={RestaurantNavigator}
        options={() => ({
          tabBarLabel: "Restaurants",
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="map"
        component={Map}
        options={() => ({
          tabBarLabel: "Map",
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={() => ({
          tabBarLabel: "Settings",
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};
