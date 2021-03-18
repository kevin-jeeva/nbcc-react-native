import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    //AsyncStorage.clear();
    let exists = await getData(key);
    if (exists != null) {
      const filterValues = exists.filter(
        (item) => item["content_id"] != value["content_id"]
      );
      var result = [value, ...filterValues];
      let len = result.length;
      if (len > 3) {
        result = result.slice(0, 3);
      }
      await AsyncStorage.setItem(key, JSON.stringify(result));
    } else {
      await AsyncStorage.setItem(key, JSON.stringify([value]));
    }
  } catch (error) {
    console.log(error);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export default {
  storeData,
  getData,
};
