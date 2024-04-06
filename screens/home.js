import React from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const userName = "Tharushika";

  const handleMyClosetButton= () => {
    navigation.navigate('closet')
  }

  const handlePurchaseItemButton= () => {
    navigation.navigate('camera')
  }

  const buttons = [
    {
      title: "My Closet",
      onPress: handleMyClosetButton,
      backgroundColor: "#C0804019", // Caramel with 40% opacity
    },
    {
      title: "Purchase Item",
      onPress: handlePurchaseItemButton,
      backgroundColor: "#B4653519", // Carob with 40% opacity
    },
    {
      title: "Outfit Recommendation",
      onPress: () => console.log("Outfit Recommendation"),
      backgroundColor: "#D8A06006", // Umber with 40% opacity
    },
  ];
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text variant="displaySmall" style={styles.greeting}>
            Hello
          </Text>
          <Text variant="headlineMedium" style={styles.userName}>
            {userName}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={button.onPress}
            style={styles.touchable}
          >
            <Card style={[styles.card, { backgroundColor: button.backgroundColor }]}>
              <Text style={styles.buttonText}>{button.title}</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    alignItems: "left",
    marginVertical: 80,
    marginHorizontal: 25,
  },
  greeting: {
    fontWeight: "bold",
    letterSpacing: 0.8
  },
  userName: {
    fontWeight: "600", 
    fontStyle: "italic",
    letterSpacing: 1.5,
    marginTop: 8,
  },
  buttonContainer: {
    alignItems: "center",
  },
  card: {
    flex: 1,
    borderRadius: 6,
    borderColor: "#765952",
    justifyContent: "center",
    alignItems: "center",
    height: 125,
    // marginVertical: 20,
  },
  touchable: {
    borderRadius: 8,
    width: "80%",
    height: 125,
    marginVertical: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default HomeScreen;