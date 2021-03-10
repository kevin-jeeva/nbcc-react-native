import React from "react";
import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthContext from "../AuthContext/context";
import Screen from "../components/screen";

function WelcomeScreen(props) {
  const { user } = useContext(AuthContext);
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Welcom Screen</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default WelcomeScreen;
