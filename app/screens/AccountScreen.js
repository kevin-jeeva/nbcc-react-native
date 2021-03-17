import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import authStorage from "../AuthContext/authStorage";
import AuthContext from "../AuthContext/context";

import Screen from "../components/screen";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import userApi from "../api/user";
import session from "../cache/userSession";
import AppButton from "../components/AppButton";

function AccountScreen(props) {
  const [staff, setStaff] = useState([]);

  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    authStorage.removeUser();
    setUser(null);
  };


  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.heading}>Your User Account</Text>
        <Text></Text>
        <Seperator />
        <Text></Text>
        <Text style={styles.mainText}>Name: {user[0].user_name} </Text>
        <Text style={styles.mainText}>Email: {user[0].email}</Text>
        <Text style={styles.mainText}>Phone: </Text>
        <AppButton
          text={"Logout"}
          onPress={handleLogout}
          style={styles.logoutBtn}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.green,
    marginTop: 25,
    marginLeft: 50,
  },
  mainText: {
    padding: 10,
    fontSize: 20,
    textAlign: "left",
  },
  logoutBtn: {
    backgroundColor: colors.primary,
  },
});

export default AccountScreen;
