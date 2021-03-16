import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/screen";

const ContactUsScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.contactus}>
          Email: nbcc@nbcc.ca Call Campuses: (506) 460-6222 284 Smythe Street,
          Fredericton NB
        </Text>
      </View>
    </Screen>
  ); //end return
}; //end const

const styles = StyleSheet.create({
  contactus: {
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "lime",
  },
});

export default ContactUsScreen;
