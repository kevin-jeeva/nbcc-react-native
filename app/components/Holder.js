import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "./screen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Holder({
  containerColor,
  imageCard,
  icon = "book",
  size = 40,
  iconColor = "black",
  holderText,
  holderTheme,
  textColor,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image style={styles.logo}
        source={imageCard}
      />
      <View style={[styles.container, holderTheme]}>
        
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
    flexDirection:"row",
    height: 80,
    paddingLeft: 25,
    marginBottom: 20,
    alignItems: "center",
    borderTopWidth: 7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },
  text: {
    minWidth: 300,
    paddingLeft: 15,
    fontSize: 20,
    color: colors.gray700
  },
  logo: {
    width: '100%',
    height: 125,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});

export default Holder;
