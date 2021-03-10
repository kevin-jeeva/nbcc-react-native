import React from "react";
import { View, StyleSheet } from "react-native";
import Holder from "../components/Holder";

import Screen from "../components/screen";
import colors from "../config/colors";

function Homepage({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Holder
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
        <Holder
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
        <Holder
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
        <Holder
          icon={"bell"}
          holderText={"Notifications"}
          iconColor={colors.red}
          textColor={styles.articleText}
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
    marginVertical: "25%",
  },
});

export default Homepage;
