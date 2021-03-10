import React from "react";
import { StyleSheet, Text } from "react-native";

function AppText({ children, style, visible, ...otherProps }) {
  if (!children || !visible) return null;
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default AppText;
