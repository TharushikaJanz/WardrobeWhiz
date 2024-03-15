import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native-paper";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/welcome_bg.webp")}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={{ marginTop: 60 }}>
          <Text style={styles.welcomeText} variant="headlineLarge">
            WELCOME
          </Text>
          <Text style={styles.text} variant="headlineLarge">
            Wardrobe Whiz
          </Text>
        </View>

        {/* <Image source={require('../assets/images/logo1.jpg')} style={{height: 100}} resizeMode="cover"/> */}
        <View style={styles.bottomContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.description} variant="bodyMedium">
              AI Powered Wardrobe Management and Shopping Assistant
            </Text>
          </View>
          <Button
            mode="contained"
            buttonColor="#5A515B"
            style={{ borderRadius: 0, marginBottom: 15 }}
            uppercase={true}
            labelStyle={{fontSize: 15}}
            
          >
            Register
          </Button>

          <Button
            mode="contained"
            buttonColor="#5A515B"
            style={{ borderRadius: 0 }}
            uppercase={true}
            labelStyle={{fontSize: 15}}
            
          >
            Sign In
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    lineHeight: 60,
  },

  welcomeText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  description: {
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
  },
  subtitleContainer: {
    marginBottom: 20,
    alignSelf: "center",
    borderTopWidth: 0.5,
    borderColor: "white",
    borderBottomWidth: 0.5,
    height: 60,
    width: 250,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  bottomContainer: {
    marginBottom: 30,
  },
});
