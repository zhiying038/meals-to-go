import React from "react";
import { TextInput as RNTextInput } from "react-native";
import classnames from "classnames";
import { tw } from "config/tailwind";
import { Props } from "./props";

const TextInput: React.FC<Props> = ({ className, ...props }) => {
  return (
    <RNTextInput
      style={tw(
        classnames("border rounded-md px-2 border-black py-2", className)
      )}
      {...props}
    />
  );
};

export default TextInput;
