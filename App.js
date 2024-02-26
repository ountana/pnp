import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import ButtonCounter from "./components/ButtonCounter";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonCounter />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f5e3",
  },
});
