import * as SecureStore from "expo-secure-store";
import { cos } from "react-native-reanimated";

const key = "authUser";

const storeUser = async (user) => {
  try {
    await SecureStore.setItemAsync(key, user);
  } catch (error) {
    console.log("Error storing the user", error);
  }
};

const restoreUser = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the user", error);
  }
};

// const getUser = async () => {
//   try {
//     const authUser = await restoreUser();
//     if (authUser) {
//       return authUser;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.log("Error getting user", error);
//   }
// };

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the user", error);
  }
};

export default {
  restoreUser,
  storeUser,
  removeUser,
};
