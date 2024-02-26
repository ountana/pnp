import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import ButtonCounter from "./components/ButtonCounter";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [buttonColor, setButtonColor] = useState("#62a87c");
  const handleTextPress = () => {
    Alert.alert("You clicked on the text", "Press ok", [
      {
        text: "ok",
        onPress: () => console.log("closed"),
      },
    ]);
  };
  const handleButtonPress = () => {
    const sameColor = "#255957".toString(16);
    setButtonColor(sameColor);
    console.log(sameColor);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableHighlight
        activeOpacity={0.6}
        nderlayColor={"#093A3E"}
        onPress={handleTextPress}
      >
        <Text numberOfLines={1} style={styles.text}>
          Click me
        </Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Change color</Text>
      </TouchableOpacity>
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
  text: {
    color: "#093A3E",
    fontSize: 20,
    margin: 20,
  },
  button: {
    backgroundColor: "#62a87c",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#f9f5e3",
    fontSize: 17,
  },
});
