import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import Screen from "../components/screen";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import content from "../api/content";

function DisplayContent({ content_id = 76, route }) {
  const [contentText, setContentText] = useState([]);

  const regex = /(<([^>]+)>)/gi;

  const GetContent = async (id = 119) => {
    const result = await content.getContent(id);
    if (!result.ok) {
      console.log("No such content");
      return setContentText(null);
    }
    let textResult = result.data[0]["content_text"].replace(regex, "");
    const regexWhitespace = /(&ldquo;|&nbsp;|&rsquo;|&mdash;|&lsquo;|&amp;)/gi;
    textResult = textResult.replace(regexWhitespace, "");
    return setContentText({
      title: result.data[0]["content_title"],
      text: textResult,
    });
  };

  useEffect(() => {
    GetContent(route.params.content_id);
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerTitle}>
            <Text style={styles.heading}>{contentText.title}</Text>
          </View>
          <Seperator />
          <Text style={styles.mainText}>{contentText.text}</Text>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  containerTitle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray400,
    padding: 10,
    minHeight: 50,
    justifyContent: "center"
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.oceanblue,
    textAlign: "center"
  },
  mainText: {
    padding: 10,
    fontSize: 15,
    textAlign: "left",
  },
});

export default DisplayContent;
