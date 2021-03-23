import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/screen";
import Seperator from "../components/Seperator";

const ContactUsScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.mainText}>{"\n"}<Text style={styles.bold}>Suggestions? Contact us and leave your message!{"\n"}</Text></Text>
        <Text style={styles.mainText}><Text style={styles.bold}>Email:</Text> nbcc@nbcc.ca</Text>
        <Text style={styles.mainText}><Text style={styles.bold}>Call Campuses:</Text> (506) 460-6222</Text>
        <Text style={styles.mainText}><Text style={styles.bold}>Head Office:</Text> 284 Smythe Street, Fredericton NB</Text>
      </View>
    </Screen>
  ); //end return
}; //end const

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#007599",
    marginTop: 25,
    textAlign: "center",
  },
  mainText: {
    padding: 10,
    fontSize: 20,
    textAlign: "left",
  },
  bold: {
    fontWeight: "bold",
  },
});

export default ContactUsScreen;
