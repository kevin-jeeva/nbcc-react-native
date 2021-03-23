import React from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Holder from "../components/Holder";

import Screen from "../components/screen";
import colors from "../config/colors";

//Homepage Navigation
function Homepage({ navigation }) {
  return (
    <Screen Newstyle={styles.screen}>
      <ScrollView>
        <>
          <View style={styles.container}>
            <Holder //Articles
              imageCard={require("../../assets/imgCards/1-wellbeing-articles.jpg")}
              icon={"file-document-outline"}
              holderText={"Articles"}
              iconColor={colors.oceanblue}
              holderTheme={[styles.cards, styles.articles]}
              onPress={() =>
                navigation.navigate("Content", {
                  resource: "Articles",
                  name: "Articles",
                })
              }
            />
            <Holder //Events
              imageCard={require("../../assets/imgCards/2-wellbeing-events.jpg")}
              icon={"calendar"}
              holderText={"Events"}
              iconColor={colors.urbangreen}
              holderTheme={[styles.cards, styles.events]}
              onPress={() =>
                navigation.navigate("Content", {
                  resource: "Events",
                  name: "Events",
                })
              }
            />
            <Holder //SupportServices
              imageCard={require("../../assets/imgCards/4-wellbeing-support.jpg")}
              icon={"face-agent"}
              holderText={"Support Services"}
              iconColor={colors.possibilityblue}
              holderTheme={[styles.cards, styles.support]}
              onPress={() =>
                navigation.navigate("Content", {
                  resource: "Support",
                  name: "Support Services",
                })
              }
            />
            <Holder //Notification
              imageCard={require("../../assets/imgCards/5-wellbeing-notifications.jpg")}
              icon={"bell"}
              holderText={"Notifications"}
              iconColor={colors.fieldgold}
              holderTheme={[styles.cards, styles.notifications]}
            />
            <Holder //Contact us
              imageCard={require("../../assets/imgCards/6-wellbeing-contactus.jpg")}
              icon={"forum"}
              holderText={"Contact Us"}
              iconColor={colors.oceanblue}
              holderTheme={[styles.cards, styles.contactUs]}
              onPress={() => navigation.navigate("ContactUs")}
            />
          </View>
        </>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "stretch"
  },

  cards: {
    backgroundColor: colors.white,
    width: '100%'
  },

  articles: {
    borderTopColor: colors.oceanblue,
  },
  events: {
    borderTopColor: colors.urbangreen,
  },
  support: {
    borderTopColor: colors.possibilityblue,
  },
  notifications: {
    borderTopColor: colors.fieldgold,
  },
  contactUs: {
    borderTopColor: colors.oceanblue,
  },

  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
});

export default Homepage;
