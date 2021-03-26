import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { LogBox } from "react-native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/AuthContext/context";
import navigationTheme from "./app/navigation/navigationTheme";
import ContentScreen from "./app/screens/ContentScreen";
import DisplayContent from "./app/screens/DisplayContent";
import authStorage from "./app/AuthContext/authStorage";
import Dashboard from "./app/screens/Dashboard";
import { cos } from "react-native-reanimated";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import ContactUsScreen from "./app/screens/ContactUsScreen.js";

export default function App() {
  //hide warnings
  LogBox.ignoreLogs(["Warning:..."]);
  LogBox.ignoreAllLogs();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    const getUserInfo = await authStorage.restoreUser();
    setUser(JSON.parse(getUserInfo));
  };

  // useEffect(() => {
  //   getUser();
  // }, []);
  if (!loading)
    return (
      <AppLoading
        startAsync={getUser}
        onFinish={() => setLoading(true)}
        onError={console.warn}
      />
    );
  return (
    // <Dashboard />
    // <ContactUsScreen />
    //<ContentScreen />
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
