import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { useContext } from "react";
import AuthContext from "../AuthContext/context";
import userApi from "../api/user";

const validationSchema = Yup.object().shape({
  phone: Yup.number()
    .required()
    .test(
      "len",
      "Must be excatly 10 numbers",
      (val) => val.toString().length === 10
    )
    .label("Phone number"),
});

function ChangePhone({ navigation }) {
  const [loginFailed, setLoginFailed] = useState({ state: false, error: "" });
  const { user } = useContext(AuthContext);
  //check the email
  const handleSubmit = async ({ phone }) => {
    const result = await userApi.changePhone(user[0].staff_id, phone);
    if (!result.ok)
      return setLoginFailed({
        state: true,
        error: "Something wrong with the database",
      });
    navigation.navigate("Account");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.txt}>Change Phone Number</Text>
        <Formik
          initialValues={{ phone: "" }}
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
                {loginFailed.phone}
              </AppText>
              <AppTextInput
                placeholder="5061231234"
                icon={"phone-classic"}
                autoCapitalize="none"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                maxLength={10}
                onBlur={() => setFieldTouched("phone")}
                onChangeText={handleChange("phone")}
              />
              <AppText style={styles.error} visible={touched.phone}>
                {errors.phone}
              </AppText>
              <AppButton
                sytle={styles.loginButton}
                onPress={handleSubmit}
                text={"Change Number"}
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

export default ChangePhone;
