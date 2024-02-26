import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  const onPressButton = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press me!</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Button pressed {count} times</Text>
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
  text: {
    color: "#093A3E",
    fontSize: 20,
    margin: 20,
  },
  button: {
    backgroundColor: "#62a87c",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#f9f5e3",
    fontSize: 20,
  },
});
