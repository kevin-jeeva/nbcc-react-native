import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import ChangePassword from "../screens/ChangePassword";
import ChangePhone from "../screens/ChangePhone";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        options={{ headerShown: false }}
        component={AccountScreen}
      />
      <Stack.Screen
        options={{ headerTitle: "" }}
        name="ChangePassword"
        component={ChangePassword}
      />
      <Stack.Screen
        options={{ headerTitle: "" }}
        name="ChangePhone"
        component={ChangePhone}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
