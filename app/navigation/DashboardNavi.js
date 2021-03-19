import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DisplayContent from "../screens/DisplayContent";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();

const DashboardNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="ShowContent"
        options={{ headerShown: false }}
        component={DisplayContent}
      />
    </Stack.Navigator>
  );
};

export default DashboardNavi;
