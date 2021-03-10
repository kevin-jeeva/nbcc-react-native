import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

import Screen from "../components/screen";
import colors from "../config/colors";
import contentApi from "../api/content";
import { FlatList } from "react-native-gesture-handler";

function ContentScreen({ resource = "Articles", navigation, route }) {
  const [content, setContent] = useState([]);

  const getContents = async () => {
    const result = await contentApi.content(route.params.resource);
    if (!result.ok) return console.log("No resource");
    return setContent(result.data);
  };

  useEffect(() => {
    getContents();
  }, []);

  const Content = ({ item }) => {
    return (
      <TouchableHighlight
        style={styles.textContainer}
        activeOpacity={1}
        underlayColor={colors.underLay}
        onPress={() =>
          navigation.navigate("ShowContent", { content_id: item.content_id })
        }
      >
        <View>
          <Text style={styles.heading}>{item.content_title}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {item.content_description}
          </Text>
          <View style={styles.line}></View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <Screen>
      <FlatList
        data={content}
        renderItem={Content}
        keyExtractor={(item) => item.content_id.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    backgroundColor: colors.iconLight,
    height: 1,
  },
  heading: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  description: {
    marginVertical: 10,
  },
});

export default ContentScreen;
