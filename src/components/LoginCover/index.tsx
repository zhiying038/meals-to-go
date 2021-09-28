import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { Button } from "components/Common";
import { tw } from "config/tailwind";
import { Props } from "./props";

const LoginCoverComponent: React.FC<Props> = ({
  children,
  isIntroduction,
  onBackPress,
}) => {
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
        <Text style={tw("mb-1 text-xl font-bold")}>Meals To Go</Text>
        <View
          style={[
            { backgroundColor: "rgba(255, 255, 255, 0.7)" },
            tw("items-center justify-center w-3/4 p-4"),
          ]}
        >
          {children}
        </View>

        {!isIntroduction && (
          <Button
            label="Back"
            center
            wrapperClassName="mt-3"
            onPress={onBackPress}
          />
        )}
      </View>
    </ImageBackground>
  );
};

LoginCoverComponent.defaultProps = {
  isIntroduction: false,
};

export const LoginCover = LoginCoverComponent;
export default LoginCover;
