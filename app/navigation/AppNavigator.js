import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

import AccountScreen from "../screens/AccountScreen";
import Homepage from "../screens/Homepage";
import ArticleNavigator from "./ArticleNavigator";
import DashboardNavi from "./DashboardNavi";
import AccountNavigator from "./AccountNavigator";
import { Notifications } from "react-push-notification";
// BOTTOM PAGE TAB
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotificaitons();
  }, []);
  const registerForPushNotificaitons = async () => {
    try{
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if(!permission.granted) return;
  
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
    }catch(error){
      console.log('error getting a push token');
    }
   
  }
  return (
    <Tab.Navigator>
      <Tab.Screen //HOMEPAGE ICON
        name="Homepage"
        component={ArticleNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen //Account ICON
        name="Dashboard"
        component={DashboardNavi}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen //Account ICON
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

