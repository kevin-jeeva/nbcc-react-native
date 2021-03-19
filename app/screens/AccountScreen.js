import React, { useEffect } from "react";
import { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  RefreshControl,
} from "react-native";
import authStorage from "../AuthContext/authStorage";
import AuthContext from "../AuthContext/context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/screen";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import userApi from "../api/user";
import session from "../cache/userSession";
import AppButton from "../components/AppButton";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

function AccountScreen({ navigation, route }) {
  const [phone, setPhone] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(false);
    getUserPhone();
    setRefreshing(false);
  };

  const handleLogout = () => {
    authStorage.removeUser();
    setUser(null);
  };

  const getUserPhone = async () => {
    const result = await userApi.getPhoneById(user[0].staff_id);
    if (!result.ok) {
      console.log("Error finding user: " + user[0].email);
      return setPhone(null);
    }
    return setPhone(result.data[0].user_phone_no);
  };

  useEffect(() => {
    getUserPhone();
  }, []);

  return (
    <Screen>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <Text style={styles.heading}>Your User Account</Text>
          <Text></Text>
          <Seperator />
          <Text></Text>
          <Text style={styles.mainText}>
            <Text style={styles.bold}>Username:</Text> {user[0].user_name}{" "}
          </Text>
          <Text style={styles.mainText}>
            <Text style={styles.bold}>Email:</Text> {user[0].email}
          </Text>
          <Text style={styles.mainText}>
            <Text style={styles.bold}> Phone: </Text>
            {phone}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ChangePassword")}
            style={styles.changePassword}
          >
            <MaterialCommunityIcons
              name="lock-reset"
              size={30}
              color={"black"}
            />
            <Text style={styles.changePasswordText}>Change Password</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={"black"}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ChangePhone")}
            style={styles.changePassword}
          >
            <MaterialCommunityIcons
              name="phone-classic"
              size={30}
              color={"black"}
            />
            <Text style={styles.changePasswordText}>Change Phone Number</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={"black"}
            />
          </TouchableWithoutFeedback>
          <AppButton
            text={"Logout"}
            onPress={handleLogout}
            style={styles.logoutBtn}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  changePassword: {
    width: "100%",
    marginVertical: 10,
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: colors.light,
    padding: 10,
    alignItems: "center",
  },
  changePasswordText: {
    width: "75%",
    fontSize: 20,
    marginLeft: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#007599",
    marginTop: 25,
    textAlign: "center",
  },
  mainText: {
    padding: 10,
    fontSize: 20,
    textAlign: "left",
  },
  bold: {
    fontWeight: "bold",
  },
  logoutBtn: {
    backgroundColor: colors.primary,
  },
  subText: {
    padding: 10,
    fontSize: 15,
    textAlign: "left",
  },
});

export default AccountScreen;
