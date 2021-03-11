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

function AccountScreen(props) {
  const [staff, setStaff] = useState([]);

  const { setUser } = useContext(AuthContext);
  const hadleLogout = () => {
    authStorage.removeUser();
    setUser(null);
  };

  const getUser = async () => {
    email = session.getEmail();
    const result = await userApi.getUserbyEmail(email);
    if (!result.ok) return console.log("No User " + email);
    let nameResult = result.data[0]["first_name"];
    return setStaff({
      fname: nameResult,
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.heading}>Your User Account</Text>
        <Text></Text>
        <Seperator />
        <Text></Text>
        <Text style={styles.mainText}>Name: {staff.fname} </Text>
        <Text style={styles.mainText}>Email: {session.getEmail()}</Text>
        <Text style={styles.mainText}>Phone: </Text>
        <Button title="logout" onPress={hadleLogout} />
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
});

export default AccountScreen;
