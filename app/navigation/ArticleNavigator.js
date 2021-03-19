import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContentScreen from "../screens/ContentScreen";
import DisplayContent from "../screens/DisplayContent";
import Homepage from "../screens/Homepage";
import ContactUsScreen from "../screens/ContactUsScreen";

const Stack = createStackNavigator();

const ArticleNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen
        name="Content"
        options={({ route }) => ({ title: route.params.name })}
        component={ContentScreen}
      />
      <Stack.Screen
        name="ShowContent"
        options={{ headerShown: false }}
        component={DisplayContent}
      />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
    </Stack.Navigator>
  );
};

export default ArticleNavigator;
