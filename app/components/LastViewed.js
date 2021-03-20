import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList, TouchableHighlight, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function LastViewed({ Data = null, navigation, route }) {
  const DisplayLastViewed = ({ item }) => {
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="#d9d9d9"
        onPress={() =>
          navigation.navigate("ShowContent", { content_id: item.content_id })
        }
      >
        <>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.content_title}</Text>
            </View>
            <View style={styles.chevron}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color={"black"}
              />
            </View>
          </View>
          <View style={styles.separator}></View>
        </>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.progressContainer}>
      <Text style={styles.titleText}>Last Viewed</Text>
      <View style={styles.tseparator}></View>
      <FlatList
        data={Data}
        renderItem={DisplayLastViewed}
        keyExtractor={(item) => item.content_id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  desc: {
    marginBottom: 5,
  },
  tseparator: {
    width: "100%",
    height: "1%",
    backgroundColor: "white",
  },
  textContainer: {
    width: "90%",
  },
  title: {
    marginVertical: 10,
    fontSize: 20,
  },
  progressContainer: {
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 10,
    overflow: "hidden",
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "white"
  },
  separator: {
    width: "100%",
    height: "1%",
    backgroundColor: "#ddd",
  },
  titleText: {
    padding: 10,
    fontSize: 20,
    alignSelf: "center",
    backgroundColor: "#007599",
    color: "white",
    width: "100%",
  },
});

export default LastViewed;
