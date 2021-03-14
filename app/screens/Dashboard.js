import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Progress from "react-native-progress";
import AuthContext from "../AuthContext/context";
import Screen from "../components/screen";
import { FlatList } from "react-native-gesture-handler";

import progress from "../api/progress";
import AppText from "../components/AppText";
import Sugesstion from "../components/Sugesstion";

function Dashboard(props) {
  const { user } = useContext(AuthContext);
  const [progressValue, setProgressValue] = useState([]);
  const [suggestion, setSuggestion] = useState([]);

  //get the progress
  const getProgress = async (staff_id) => {
    const result = await progress.GetProgressValue(staff_id);
    if (!result.ok) return console.log("No progress");
    return setProgressValue(result.data);
  };

  //get suggestion
  const getSuggestion = async (staff_id) => {
    const result = await progress.GetSuggestion(staff_id);
    if(!result.ok) return console.log("No Progress");
    return setSuggestion(result.data);
  }
  const GetSuggestion = () => <Sugesstion Data={suggestion}/>


  useEffect(() => {
    let staff_id = user[0]["staff_id"];
    getProgress(staff_id);
    getSuggestion(staff_id);
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
    <Screen Newstyle={styles.screen}>
      <View style={styles.progressContainer}>
        <Text style={styles.titleText}>Progress</Text>
        <View style={styles.seperator}></View>
        <FlatList
          data={progressValue}
          renderItem={DisplayProgress}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
       <View style={styles.progressContainer}>
        <Text style={styles.titleText}>Suggestion</Text>
        <View style={styles.seperator}></View>
        <Sugesstion/>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "dodgerblue",
  },
  progressContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  seperator: {
    width: "100%",
    height: "1%",
    backgroundColor: "black",
  },
  text: {
    marginRight: 10,
  },
  textContainer: {
    width: "26%",
  },
  titleText: {
    fontSize: 20,
    alignSelf: "center",
  },
});

export default Dashboard;
