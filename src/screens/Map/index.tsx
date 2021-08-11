import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { tw } from "config/tailwind";

const MapScreen: React.FC = () => {
  return (
    <SafeAreaView
      style={[tw("flex-1"), { marginTop: StatusBar.currentHeight }]}
    >
      <Text>Map</Text>
    </SafeAreaView>
  );
};

export const Map = MapScreen;
export default Map;
