import React from "react";
import { SafeAreaView, StatusBar, View, Text } from "react-native";
import { List, Avatar } from "react-native-paper";
import { useAuth } from "contexts/AuthenticationContext";
import { tw } from "config/tailwind";
import { Props } from "./props";

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const { onUserLogout, user } = useAuth();

  return (
    <SafeAreaView
      style={[tw("flex-1"), { marginTop: StatusBar.currentHeight }]}
    >
      <View style={tw("items-center mt-4")}>
        <Avatar.Icon size={100} icon="human" />
        <Text style={tw("my-4")}>{user.email}</Text>
      </View>

      <List.Section>
        <List.Item
          title="Favourites"
          style={tw("p-4")}
          description="View your favourites"
          onPress={() => navigation.navigate("Favourites")}
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        />

        <List.Item
          title="Logout"
          style={tw("p-4")}
          onPress={onUserLogout}
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
        />
      </List.Section>
    </SafeAreaView>
  );
};

export const Settings = SettingsScreen;
export default Settings;
