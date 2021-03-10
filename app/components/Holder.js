import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "./screen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Holder({
  containerColor,
  icon = "book",
  size = 40,
  iconColor = "black",
  holderText,
  textColor,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, containerColor]}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={size}
          color={iconColor}
        />
        <Text style={[styles.text, textColor]}>{holderText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  text: {
    color: colors.white,
  },
});

export default Holder;
