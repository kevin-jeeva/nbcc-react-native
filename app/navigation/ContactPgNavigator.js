import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContactUsPg from "../screens/ContactUsScreen";

const Stack = createStackNavigator();

const ContactNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "ContactUsPg"
            component={ContactUsPg} />
        </Stack.Navigator>
    );
};


export default ContactNav();
