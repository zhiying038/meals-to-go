import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>React Native Blank Canvas</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
