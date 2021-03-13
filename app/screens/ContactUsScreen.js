import React from "react";
import { View, StyleSheet, Text } from "react-native";

const contactUsScreen = () => {
  return(
    <View style={styles.contactus}>
      <Text> Email: nbcc@nbcc.ca </Text>
      <Text>Call Campuses: (506) 460-6222</Text>
      <Text>284 Smythe Street, Fredericton NB</Text>
    </View>
  ) //end return
} //end const


const styles = StyleSheet.create({
    contactus:{
      alignItems: 'center'
    }
})

export default contactUsScreen; 