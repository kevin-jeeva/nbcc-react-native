import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Progress from "react-native-progress";
import AuthContext from "../AuthContext/context";
import Screen from "../components/screen";
import { FlatList } from "react-native-gesture-handler";

import progress from "../api/progress";

function Dashboard(props) {
  const { user } = useContext(AuthContext);
  const [progressValue, setProgressValue] = useState([]);

  const getProgress = async (staff_id) => {
    const result = await progress.GetProgressValue(staff_id);
    if (!result.ok) return console.log("No progress");
    return setProgressValue(result.data);
  };

  useEffect(() => {
    let staff_id = user[0]["staff_id"];
    getProgress(staff_id);
  }, []);

  const DisplayProgress = ({ item }) => {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.resourceName}</Text>
          </View>

          <Progress.Bar
            animated
            animationType={"decay"}
            progress={item.progressVal}
            color={"red"}
            height={20}
            width={250}
          />
        </View>
      </>
    );
  };

  return (
    <Screen>
      <FlatList
        data={progressValue}
        renderItem={DisplayProgress}
        keyExtractor={(item) => item.id.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  text: {
    marginRight: 10,
  },
  textContainer: {
    width: "30%",
  },
});

export default Dashboard;
