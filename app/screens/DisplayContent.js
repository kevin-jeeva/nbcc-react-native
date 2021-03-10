import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import Screen from "../components/screen";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import content from "../api/content";

function DisplayContent({ content_id = 76, route }) {
  const [contentText, setContentText] = useState([]);

  const regex = /(<([^>]+)>)/gi;

  const GetContent = async (id) => {
    const result = await content.getContent(id);
    if (!result.ok) return console.log("No such content");
    let textResult = result.data[0]["content_text"].replace(regex, "");
    const regexWhitespace = /(&ldquo;|&nbsp;|&rsquo;|&mdash;|&lsquo;)/gi;
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
          <Text style={styles.heading}>{contentText.title}</Text>
          <Seperator />
          <Text style={styles.mainText}>{contentText.text}</Text>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.red,
    padding: 10,
  },
  mainText: {
    padding: 10,
    fontSize: 20,
    textAlign: "left",
  },
});

export default DisplayContent;
