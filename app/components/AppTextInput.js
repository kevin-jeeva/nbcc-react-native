import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({ placeholder, icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} color={colors.iconLight} size={30} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    width: "100%",
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  textInput: {
    marginLeft: 10,
    width: "70%",
  },
});

export default AppTextInput;
