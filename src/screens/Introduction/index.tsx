import React from "react";
import { Button } from "components/Common";
import { LoginCover } from "components/LoginCover";
import { Props } from "./props";

const IntroductionScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <LoginCover isIntroduction>
      <Button
        block
        center
        label="Login"
        wrapperClassName="h-10 mb-4"
        touchableClassName="bg-primary"
        labelClassName="text-white"
        onPress={() => navigation.navigate("login")}
      />

      <Button
        block
        center
        label="Register"
        wrapperClassName="h-10"
        touchableClassName="bg-primary"
        labelClassName="text-white"
        onPress={() => navigation.navigate("register")}
      />
    </LoginCover>
  );
};

export const Introduction = IntroductionScreen;
export default Introduction;
