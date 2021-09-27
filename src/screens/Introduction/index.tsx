import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { LoginCover } from "components/LoginCover";
import { tw } from "config/tailwind";
import { Props } from "./props";

const IntroductionScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <LoginCover>
      <View
        style={[
          { backgroundColor: "rgba(255, 255, 255, 0.3)" },
          tw("absolute w-full h-full items-center justify-center"),
        ]}
      >
        <View
          style={[
            { backgroundColor: "rgba(255, 255, 255, 0.7)" },
            tw("items-center justify-center w-1/2 h-1/4 p-6"),
          ]}
        >
          <Button
            icon="lock-open-outline"
            mode="contained"
            style={tw("bg-primary w-full p-2")}
            onPress={() => navigation.navigate("login")}
          >
            Login
          </Button>
          <Button
            icon="lock-open-outline"
            mode="contained"
            style={tw("mt-4 w-full p-2")}
            onPress={() => navigation.navigate("register")}
          >
            Register
          </Button>
        </View>
      </View>
    </LoginCover>
  );
};

export const Introduction = IntroductionScreen;
export default Introduction;
