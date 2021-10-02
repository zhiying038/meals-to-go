import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { Props } from "./props";

const FadeInAnimation: React.FC<Props> = ({ duration, style, children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

export const FadeIn = FadeInAnimation;
export default FadeIn;
