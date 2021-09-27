import React from "react";
import { ImageBackground } from "react-native";
import { tw } from "config/tailwind";

const LoginCoverComponent: React.FC = ({ children }) => {
  return (
    <ImageBackground
      source={require("assets/home_bg.jpg")}
      style={tw("flex-1 items-center justify-center")}
    >
      {children}
    </ImageBackground>
  );
};

export const LoginCover = LoginCoverComponent;
export default LoginCover;
