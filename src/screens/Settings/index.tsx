import React, { useContext } from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { Button, Colors } from "react-native-paper";
import { AuthenticationContext } from "contexts/AuthenticationContext";
import { tw } from "config/tailwind";

const SettingsScreen: React.FC = () => {
  const { onUserLogout } = useContext(AuthenticationContext);

  return (
    <SafeAreaView
      style={[tw("flex-1"), { marginTop: StatusBar.currentHeight }]}
    >
      <Text>Settings</Text>
      <Button onPress={onUserLogout} color={Colors.blue300}>
        Logout
      </Button>
    </SafeAreaView>
  );
};

export const Settings = SettingsScreen;
export default Settings;
