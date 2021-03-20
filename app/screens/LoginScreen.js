import React, { useState } from "react";
import { View, StyleSheet, Text, Image, AsyncStorage } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
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
import session from "../cache/userSession";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});
//LOGIN screen LOGIC
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
    session.setEmail(email);
  };

  return (
    <Screen>
      <View style={styles.backgroundLogin}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#a1d8e0', '#007599']}
          style={styles.background}
          start={[0.0, 1.0]}
          end={[1.0, 0.0]}
        />

        <View style={styles.container}>
          <View style={styles.introContainer}>
            <Image style={styles.logo}
              source={require("../../assets/nbcc.png")}
            />
            <Text style={styles.introText}>
              Login for Staff
            </Text>
          </View>
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
                <View style={{ width: 200}}>
                  <AppButton
                    style={styles.loginButton}
                    onPress={handleSubmit}
                    text={"Login"}
                  ></AppButton>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backgroundLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a1d8e0"
  },
  background: {
    position: 'absolute',
    height: '100%',
    left: 0,
    right: 0,
    top: 0
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  introContainer: {
    marginBottom: 25,
    backgroundColor: "white",
  },
  introText: {
    fontSize: 25,
    textAlign: "center"
  },
  error: {
    color: colors.error,
    fontSize: 10,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  loginButton: {
    //ready to be modified
  },
  logo: {
    margin: 30,
    resizeMode: 'stretch',
    backgroundColor: "white"
  },
});

export default LoginScreen;
