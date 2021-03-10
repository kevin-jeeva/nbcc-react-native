import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen(props) {
  return <SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
