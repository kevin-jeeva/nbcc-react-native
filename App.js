import React, { useState }from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/AuthContext/context";
import navigationTheme from "./app/navigation/navigationTheme";
import ContentScreen from "./app/screens/ContentScreen";
import DisplayContent from "./app/screens/DisplayContent";
import contactUsScreen from "./app/screens/ContactUsScreen.js";


export default function App() {
  const [user, setUser] = useState();

  return (
    // <ContentScreen />
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
  return (
    <contactUsScreen/>
  )
}
