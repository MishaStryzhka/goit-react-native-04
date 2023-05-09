import React, { useState } from "react";
import { isLoading, useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [loadFonts] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Lobster-Regular": require("./assets/fonts/Lobster/Lobster-Regular.ttf"),
    "BrunoAceSC-Regular": require("./assets/fonts/Bruno/BrunoAceSC-Regular.ttf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
  }, [])

  if (!loadFonts) {
    return undefined
  }

  const toggleRegistered = () => {
    setIsRegistered(!isRegistered);
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ImageBackground source={require('./assets/PhotoBG.png')} resizeMode="cover" style={styles.image}>
            {!isRegistered && <RegistrationScreen toggleRegistered={toggleRegistered} />}
            {isRegistered && <LoginScreen toggleRegistered={toggleRegistered} />}
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
});