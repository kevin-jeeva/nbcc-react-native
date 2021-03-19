import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight, TouchableOpacity } from "react-native";

function Sugesstion({ Data = null, navigation, route }) {
  const DisplayProgress = ({ item }) => {
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
              <Text numberOfLines={1}>{item.content_description}</Text>
            </View>
            <View style={styles.chevron}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color={"black"}
              />
            </View>
          </View>
          <View style={styles.seperator}></View>
        </>
      </TouchableHighlight>
    );
  };

  return (
    <FlatList
      data={Data}
      renderItem={DisplayProgress}
      keyExtractor={(item) => item.content_id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  seperator: {
    width: "100%",
    height: "1%",
    backgroundColor: "black",
  },
  textContainer: {
    width: "90%",
  },
  title: {
    marginVertical: 10,
    fontSize: 20,
  },
});

export default Sugesstion;
