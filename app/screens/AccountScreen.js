import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Screen from "../components/screen";

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Account Screen</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AccountScreen;
