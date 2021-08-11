import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { tw } from "config/tailwind";

const SettingsScreen: React.FC = () => {
  return (
    <SafeAreaView
      style={[tw("flex-1"), { marginTop: StatusBar.currentHeight }]}
    >
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export const Settings = SettingsScreen;
export default Settings;
