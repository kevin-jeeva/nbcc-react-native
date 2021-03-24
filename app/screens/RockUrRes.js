import React from "react";
import { View, StyleSheet, Text, RefreshControl } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/screen";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { color, set } from "react-native-reanimated";
import colors from "../config/colors";
import { useEffect, useState } from "react/cjs/react.development";
import progress from "../api/progress";
import { useContext } from "react";
import AuthContext from "../AuthContext/context";

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
  const [resolution, setResolution] = useState([]);
  const { user } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);

  const getResolution = async (user_id = user[0].staff_id) => {
    const result = await progress.GetResolution(user_id);
    if (!result.ok) return setResolution(null);
    return setResolution(result.data);
  };

  const handleDelete = async (obj, staff_id = user[0].staff_id) => {
    const result = await progress.ReadResolution(obj.res_id, staff_id);
    if (result.ok) return getResolution();
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getResolution();
    setRefreshing(false);
  };

  useEffect(() => {
    getResolution();
  }, []);

  const RightActions = (item) => {
    return (
      <TouchableWithoutFeedback
        style={styles.done}
        onPress={() => handleDelete(item)}
      >
        <View>
          <MaterialCommunityIcons
            name={"trash-can-outline"}
            size={30}
            color={colors.light}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const Rock = ({ item }) => {
    return (
      <Swipeable renderRightActions={() => RightActions(item)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={"format-list-bulleted-square"}
            size={30}
            color={"black"}
          />
          <Text style={styles.toDoText}>{item.res_text}</Text>
        </View>
        <View style={styles.seperator}></View>
      </Swipeable>
    );
  };

  return (
    <Screen>
      <FlatList
        data={resolution}
        renderItem={Rock}
        keyExtractor={(item) => item.res_id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
  toDoText: {
    fontSize: 15,
    width: "100%",
    marginHorizontal: 20,
  },
});

export default RockUrRes;
