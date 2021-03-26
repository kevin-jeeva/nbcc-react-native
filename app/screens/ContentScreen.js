import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  RefreshControl,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/screen";
import colors from "../config/colors";
import contentApi from "../api/content";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import cacheStorage from "../cache/cacheStorage";

function ContentScreen({ resource = "Articles", navigation, route }) {
  const [content, setContent] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  //onrefresh
  const onRefresh = () => {
    setRefreshing(true);
    getContents();
    setRefreshing(false);
  };

  const AddLastViewed = (content_id, content_title) => {
    cacheStorage.storeData("Last_viewed", { content_id, content_title });
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
        underlayColor={colors.gray200}
        onPress={() => {
          AddLastViewed(item.content_id, item.content_title);
          navigation.navigate("ShowContent", {
            name: "",
            content_id: item.content_id,
          });
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/*this should be visible for events only*/}
        {route.params.resource === "Events" ? (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("RockRes")}
          >
            <View style={styles.RockRes}>
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                size={30}
                color={"black"}
              />
              <Text style={styles.RockTitle}>Rock Your Resolution</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color={"black"}
              />
            </View>
          </TouchableWithoutFeedback>
        ) : null}

        {content == null ? (
          <Text>No {route.params.resource}</Text>
        ) : (
          <FlatList
            data={content}
            renderItem={Content}
            keyExtractor={(item) => item.content_id.toString()}
          />
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  arrow: {
    width: "100%",
  },
  chevron: {},
  line: {
    width: "100%",
    backgroundColor: colors.gray200,
    height: 1,
  },
  heading: {
    color: colors.oceanblue,
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
  RockRes: {
    width: "100%",
    backgroundColor: colors.light,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
  },
  RockTitle: {
    fontSize: 20,
    fontWeight: "300",
    width: "70%",
    marginHorizontal: 20,
  },
});

export default ContentScreen;
