import { Text, View, StyleSheet } from "react-native";
import React from "react";
import Game from "./game";

export default function Index() {
  const styles = StyleSheet.create({
    textStyles: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.textStyles}>Welcome to the Game!</Text>
      <Game />
    </View>
  );
}
