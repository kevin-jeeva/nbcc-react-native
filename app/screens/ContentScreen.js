import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/screen";
import colors from "../config/colors";
import contentApi from "../api/content";
import { FlatList } from "react-native-gesture-handler";
import cacheStorage from "../cache/cacheStorage";

function ContentScreen({ resource = "Articles", navigation, route }) {
  const [content, setContent] = useState([]);

  const AddLastViewed = (content_id) => {
    cacheStorage.storeData("Last_viewed", { "content_id": content_id });    
    const value = cacheStorage.getData("Last_viewed");
    console.log(value.content_id);    
  
  };

  const getContents = async () => {
    const result = await contentApi.content(route.params.resource);
    if (!result.ok) {
      console.log("No resource");
      return setContent(null);
    }
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
        onPress={() => {
          AddLastViewed(item.content_id);
          navigation.navigate("ShowContent", { content_id: item.content_id });
        }}
      >
        <>
          <View style={styles.cotentContainer}>
            <View style={styles.arrow}>
              <Text style={styles.heading}>{item.content_title}</Text>
              <Text numberOfLines={2} style={styles.description}>
                {item.content_description}
              </Text>
            </View>
            <View style={styles.chevron}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color={"black"}
              />
            </View>
          </View>
          <View style={styles.line}></View>
        </>
      </TouchableHighlight>
    );
  };

  return (
    <Screen>
      {content == null ? (
        <Text>No {route.params.resource}</Text>
      ) : (
        <FlatList
          data={content}
          renderItem={Content}
          keyExtractor={(item) => item.content_id.toString()}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  arrow: {
    width: "100%%",
  },
  chevron: {},
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
  cotentContainer: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textContainer: {
    flex: 1,
    width: "100%",

    paddingHorizontal: 15,
  },
  description: {
    marginVertical: 10,
  },
});

export default ContentScreen;
