import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IconArrowLeft from "./assets/icon/iconArrowLeft.svg";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import Home from "./Screens/Home";
import CreatePostsScreen from "./Screens/mainScreens/CreatePostsScreen";

const MainStack = createStackNavigator(); // вказує на групу навігаторів


export default function App() {

  const [loadFonts] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  if (!loadFonts) {
    return undefined
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen options={{ headerShown: false, }} name="RegistrationScreen" component={RegistrationScreen} />
        <MainStack.Screen options={{ headerShown: false, }} name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen options={{ headerShown: false, }} name="Home" component={Home} />
        <MainStack.Screen
          options={{
            title: "Создать публикацию",
            headerStyle: {
              height: 88,
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              marginBottom: -10,
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              lineHeight: 22,
              letterSpacing: -0.408,
            },
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <IconArrowLeft width={24} height={24} />
            ),
            headerLeftContainerStyle: {
              left: 16,
            },
          }}
          name="CreatePostsScreen" component={CreatePostsScreen} />

      </MainStack.Navigator>
    </NavigationContainer>
  );
};