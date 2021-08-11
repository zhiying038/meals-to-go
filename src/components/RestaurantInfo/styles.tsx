import { StyleSheet } from "react-native";

export const useStyles = () => {
  const wrapperShadowStyles = StyleSheet.flatten([
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4.84,
      elevation: 5,
    },
  ]);

  const shopClosedStyles = StyleSheet.flatten([
    {
      opacity: 0.5,
    },
  ]);

  return { wrapperShadowStyles, shopClosedStyles };
};
