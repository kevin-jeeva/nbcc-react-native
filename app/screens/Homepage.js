import React from "react";
import { View, StyleSheet } from "react-native";
import Holder from "../components/Holder";

import Screen from "../components/screen";
import colors from "../config/colors";

//Homepage Navigation
function Homepage({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Holder //Articles
          icon={"book"}
          iconColor={colors.blue}
          textColor={styles.articleText}
          holderText={"Articles"}
          onPress={() =>
            navigation.navigate("Content", {
              resource: "Articles",
              name: "Articles",
            })
          }
        />
        <Holder //Events
          icon={"calendar"}
          holderText={"Events"}
          iconColor={colors.green}
          textColor={styles.articleText}
          onPress={() =>
            navigation.navigate("Content", {
              resource: "Events",
              name: "Events",
            })
          }
        />
        <Holder //SupportServices
          icon={"face-agent"}
          holderText={"Support Services"}
          iconColor={colors.darkBlue}
          textColor={styles.articleText}
          onPress={() =>
            navigation.navigate("Content", {
              resource: "Support",
              name: "Support Services",
            })
          }
        />
        <Holder //Notification
          icon={"bell"}
          holderText={"Notifications"}
          iconColor={colors.red}
          textColor={styles.articleText}
        />
        <Holder //Contact us
          icon={"mail"}
          holderText={"Contact Us"}
          iconColor={colors.blue}
          textColor={styles.articleText}
          onPress={()=>
            navigation.navigate("Content",{
              resource: "Contact",
              name: "Contact Us",
            })
          }
          
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  articleText: {
    color: colors.black,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 30,
    marginVertical: "10%",
  },
});

export default Homepage;
