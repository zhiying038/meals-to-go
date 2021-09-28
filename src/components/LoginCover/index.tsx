import React from "react";
import { ImageBackground, View } from "react-native";
import { tw } from "config/tailwind";

const LoginCoverComponent: React.FC = ({ children }) => {
  return (
    <ImageBackground
      source={require("assets/home_bg.jpg")}
      style={tw("flex-1 items-center justify-center")}
    >
      <View
        style={[
          { backgroundColor: "rgba(255, 255, 255, 0.3)" },
          tw("absolute w-full h-full items-center justify-center"),
        ]}
      >
        <View
          style={[
            { backgroundColor: "rgba(255, 255, 255, 0.7)" },
            tw("items-center justify-center w-3/4 h-1/4 p-6"),
          ]}
        >
          {children}
        </View>
      </View>
    </ImageBackground>
  );
};

export const LoginCover = LoginCoverComponent;
export default LoginCover;
