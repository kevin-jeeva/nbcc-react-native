import React, { useState } from "react";
import { View, StyleSheet, Text, Image, AsyncStorage } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import user from "../api/user";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  Newpassword: Yup.string().required().label("New Password"),
  Cnfpassword: Yup.string().required().label("Confirm Password"),
});

function ChangePassword({ navigation }) {
  const [loginFailed, setLoginFailed] = useState({ state: false, error: "" });
  //check the email
  const handleSubmit = async ({ email, Newpassword, Cnfpassword }) => {
    if (Newpassword == Cnfpassword) {
      const results = await user.changePassword(email, Cnfpassword);
      if (!results.ok)
        return setLoginFailed({ state: true, error: " Invalid Email Address" });
      return navigation.navigate("Account");
    }
    setLoginFailed({ state: true, error: "Password not match" });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.txt}>Change Password</Text>
        <Formik
          initialValues={{ email: "", Newpassword: "", Cnfpassword: "" }}
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
              <AppText style={styles.error} visible={loginFailed.state}>
                {loginFailed.error}
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
                placeholder="New Password"
                icon={"lock"}
                secureTextEntry
                textContentType="password"
                onChangeText={handleChange("Newpassword")}
              />
              <AppText style={styles.error} visible={touched.Newpassword}>
                {errors.Newpassword}
              </AppText>
              <AppTextInput
                placeholder="confirm Password"
                icon={"lock"}
                secureTextEntry
                textContentType="password"
                onChangeText={handleChange("Cnfpassword")}
              />
              <AppText style={styles.error} visible={touched.Cnfpassword}>
                {errors.Cnfpassword}
              </AppText>
              <AppButton
                sytle={styles.loginButton}
                onPress={handleSubmit}
                text={"Change Password"}
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
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
  },
});

export default ChangePassword;
