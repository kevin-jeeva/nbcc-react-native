import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ text, style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    borderRadius: 25,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  text: {
    fontWeight: "500",
    fontSize: 20,
    color: colors.white,
  },
});

export default AppButton;
