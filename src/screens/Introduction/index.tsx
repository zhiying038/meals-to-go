import React from "react";
import { Button } from "components/Common";
import { LoginCover } from "components/LoginCover";
import { Props } from "./props";

const IntroductionScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <LoginCover>
      <Button
        icon="lock-open-outline"
        mode="contained"
        className="bg-primary w-full p-2"
        onPress={() => navigation.navigate("login")}
      >
        Login
      </Button>
      <Button
        icon="email"
        mode="contained"
        className="mt-4 w-full p-2 bg-primary"
        onPress={() => navigation.navigate("register")}
      >
        Register
      </Button>
    </LoginCover>
  );
};

export const Introduction = IntroductionScreen;
export default Introduction;
