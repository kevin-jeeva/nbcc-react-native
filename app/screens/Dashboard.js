import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";
import * as Progress from "react-native-progress";
import AuthContext from "../AuthContext/context";
import Screen from "../components/screen";
import { FlatList, TouchableOpacity } from "react-native";

import progress from "../api/progress";
import AppText from "../components/AppText";
import Sugesstion from "../components/Sugesstion";
import { cos } from "react-native-reanimated";
import MostViewed from "../components/MostViewed";
import cacheStorage from "../cache/cacheStorage";
import LastViewed from "../components/LastViewed";
import colors from "../config/colors";

function Dashboard({ navigation, route }) {
  const { user } = useContext(AuthContext);
  const [progressValue, setProgressValue] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);
  const [lastViewed, setLastViewed] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  //onRefresh
  const onRefresh = () => {
    setRefreshing(true);
    let staff_id = user[0]["staff_id"];
    getProgress(staff_id);
    getSuggestion(staff_id);
    getMostViewed(staff_id);
    getLastViewed();
    setRefreshing(false);
  };

  //get the progress
  const getProgress = async (staff_id) => {
    const result = await progress.GetProgressValue(staff_id);
    if (!result.ok) return console.log("No progress");
    return setProgressValue(result.data);
  };

  //get suggestion
  const getSuggestion = async (staff_id) => {
    const result = await progress.GetSuggestion(staff_id);
    if (!result.ok) {
      console.log("No Progress");
      return setSuggestion(null);
    }
    return setSuggestion(result.data);
  };

  //get most viewed
  const getMostViewed = async (staff_id) => {
    const result = await progress.GetMostViewed(staff_id);
    if (!result.ok) {
      console.log("No progress");
      return setMostViewed(null);
    }
    return setMostViewed(result.data);
  };

  //get last Viewed
  const getLastViewed = async () => {
    const result = await cacheStorage.getData("Last_viewed");
    setLastViewed(result);
  };

  useEffect(() => {
    let staff_id = user[0]["staff_id"];
    getProgress(staff_id);
    getSuggestion(staff_id);
    getMostViewed(staff_id);
    getLastViewed();
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
            color={colors.urbangreen}
            height={20}
            width={250}
          />
        </View>
      </>
    );
  };

  return (
    <Screen Newstyle={styles.screen}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <>
          <View style={styles.progressContainer}>
            <Text style={styles.titleText}>Progress</Text>
            <View style={styles.separator}></View>

            <FlatList
              data={progressValue}
              renderItem={DisplayProgress}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.titleText}>Suggestion</Text>
            <View style={styles.separator}></View>
            <Sugesstion
              navigation={navigation}
              route={route}
              Data={suggestion}
            />
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.titleText}>Most Viewed</Text>
            <View style={styles.separator}></View>
            <MostViewed
              navigation={navigation}
              route={route}
              Data={mostViewed}
            />
          </View>
          <LastViewed navigation={navigation} Data={lastViewed} />
        </>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  progressContainer: {
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 10,
    overflow: "hidden",
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: colors.white
  },
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  separator: {
    width: "100%",
    height: "1%",
    backgroundColor: colors.white,
  },
  text: {
    marginRight: 10,
  },
  textContainer: {
    width: "26%",
  },
  titleText: {
    padding: 10,
    fontSize: 20,
    alignSelf: "center",
    backgroundColor: colors.oceanblue,
    color: colors.white,
    width: "100%",
  },
});

export default Dashboard;
