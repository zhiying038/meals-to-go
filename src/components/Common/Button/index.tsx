import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useStyles } from "./styles";
import { Props } from "./props";

const Button: React.FC<Props> = (props) => {
  const { onPress, label } = props;

  const { touchableStyle, wrapperStyle, labelStyle } = useStyles(props);

  return (
    <View style={wrapperStyle}>
      <TouchableOpacity onPress={onPress} style={touchableStyle}>
        <Text style={labelStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
