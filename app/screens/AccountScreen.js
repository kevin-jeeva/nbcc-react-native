import React from "react";
import { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import authStorage from "../AuthContext/authStorage";
import AuthContext from "../AuthContext/context";

import Screen from "../components/screen";

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const hadleLogout = () => {
    authStorage.removeUser();
    setUser(null);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text>Account Screen</Text>
        <Button title="logout" onPress={hadleLogout} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AccountScreen;
