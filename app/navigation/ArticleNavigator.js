import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContentScreen from "../screens/ContentScreen";
import DisplayContent from "../screens/DisplayContent";
import Homepage from "../screens/Homepage";

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
    </Stack.Navigator>
  );
};

export default ArticleNavigator;
