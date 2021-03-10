import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function Seperator({ style }) {
  return <View style={[styles.line, style]}></View>;
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    backgroundColor: colors.iconLight,
    height: 1,
  },
});

export default Seperator;
