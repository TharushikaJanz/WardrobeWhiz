import React from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const userName = "Tharushika";

  const handleMyClosetButton= () => {
    navigation.navigate('closet')
  }

  const buttons = [
    {
      title: "My Closet",
      onPress: handleMyClosetButton,
      // image: require('../assets/my_closet_image.jpg'),
    },
    {
      title: "Purchase Item",
      onPress: () => console.log("Purchase Item"),
      // image: require('../assets/purchase_item_image.jpg'),
    },
    {
      title: "Outfit Recommendation",
      onPress: () => console.log("Outfit Recommendation"),
      // image: require('../assets/outfit_recommendation_image.jpg'),
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
            // activeOpacity={0.7}
            style={styles.touchable}
          >
            <Card style={styles.card}>
              {/* <ImageBackground source={button.image} style={styles.imageBackground}> */}
              <Text style={styles.buttonText}>{button.title}</Text>
              {/* </ImageBackground> */}
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
    // textTransform: "uppercase",
    letterSpacing: 1.5,
    marginTop: 8,
  },
  buttonContainer: {
    alignItems: "center",
  },
  card: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    borderRadius: 8,
    width: "80%",
    height: 125,
    marginVertical: 20,
  },
  // imageBackground: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 16,
  // },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default HomeScreen;
