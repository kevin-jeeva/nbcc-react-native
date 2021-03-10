import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import userApi from "../api/user";
import { useContext } from "react";
import AuthContext from "../AuthContext/context";
import authStorage from "../AuthContext/authStorage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  //check the email
  const handleSubmit = async ({ email, password }) => {
    const result = await userApi.login(email, password);
    if (!result.ok) {
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    const user = result.data;
    authContext.setUser(user);
    authStorage.storeUser(JSON.stringify(user)); //set the user to secure storage
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/nbcc.png")} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppText style={styles.error} visible={loginFailed}>
                {"Invalid Email or Password"}
              </AppText>
              <AppTextInput
                placeholder="Enter Email"
                icon={"email"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
              <AppText style={styles.error} visible={touched.email}>
                {errors.email}
              </AppText>
              <AppTextInput
                placeholder="Enter Password"
                icon={"lock"}
                secureTextEntry
                textContentType="password"
                onChangeText={handleChange("password")}
              />
              <AppText style={styles.error} visible={touched.password}>
                {errors.password}
              </AppText>
              <AppButton
                sytle={styles.loginButton}
                onPress={handleSubmit}
                text={"Login"}
              ></AppButton>
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 23,
  },
  error: {
    color: colors.error,
    fontSize: 10,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  loginButton: {
    marginVertical: 30,
  },
  logo: {
    bottom: 60,
  },
});

export default LoginScreen;
