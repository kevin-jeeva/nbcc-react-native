import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import Screen from "../components/screen";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import userApi from "../api/user";
import session from "../cache/userSession";


function AccountScreen(props) {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    email = session.getEmail();
    const result = await userApi.getUserbyEmail(email);
    if (!result.ok) return console.log("No User " + email);
    let nameResult = result.data[0]["first_name"];
    return setUser({
      fname: nameResult,
    });
  };

  
  getUser();
    return ( 
      <Screen>
        <View style={styles.container}>
          <Text style={styles.heading}>Your User Account</Text>
          <Text></Text><Seperator /><Text></Text>
          <Text style={styles.mainText}>Name: {user.fname} </Text>
          <Text style={styles.mainText}>Email: {session.getEmail()}</Text>
          <Text style={styles.mainText}>Phone: </Text>
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
