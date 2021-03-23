import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/screen";
import { FlatList } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import colors from "../config/colors";

const message = [
  {
    id: "1",
    toDo: "Drink water",
  },
  {
    id: "2",
    toDo: "Jog for ten minutes",
  },
];

function RockUrRes(props) {
  const RightActions = () => {
    return (
      <View style={styles.done}>
        <MaterialCommunityIcons
          name={"trash-can-outline"}
          size={30}
          color={colors.light}
        />
      </View>
    );
  };

  const Rock = ({ item }) => {
    return (
      <Swipeable renderRightActions={RightActions}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={"format-list-bulleted-square"}
            size={30}
            color={"black"}
          />
          <Text style={styles.toDoText}>{item.toDo}</Text>
        </View>
        <View style={styles.seperator}></View>
      </Swipeable>
    );
  };

  return (
    <Screen>
      <FlatList
        data={message}
        renderItem={Rock}
        keyExtractor={(item) => item.id.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  done: {
    backgroundColor: "tomato",
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
  toDoText: {
    fontSize: 20,
    width: "50%",
    marginHorizontal: 20,
  },
});

export default RockUrRes;
