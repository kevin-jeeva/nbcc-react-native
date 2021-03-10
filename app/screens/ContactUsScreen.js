import React from "react";
import { View, StyleSheet } from "react-native";
import Holder from "../components/Holder";

import Screen from "../components/screen";
import colors from "../config/colors";
import userApi from "../api/user";
import session from "../cache/userSession";

function ContactUsScreen(){
    const { user } = useContext(AuthContext);
    return (
      <Screen>
        <View style={styles.container}>
          <Text>Contact Us!</Text>
        </View>
      </Screen>
    );

} //end function ContactUs

const styles = StyleSheet.create({
    
})

export default ContactUsScreen; 