import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Appbar, Card, IconButton } from "react-native-paper";

const categories = [
  "Shirts",
  "T-Shirts",
  "Frocks",
  "Trousers",
  "Shorts",
  "Jeans",
  "Jackets",
];

// Dummy images data
const items = [
  { id: 1, source: require("../assets/bluetshirt.jpeg") },
  { id: 2, source: require("../assets/redtshirt.webp") },
  { id: 3, source: require("../assets/tshirt.jpeg") },
  { id: 4, source: require("../assets/ashtshirt.jpeg") },
  { id: 5, source: require("../assets/tshirt.jpeg") },
  { id: 6, source: require("../assets/ashtshirt.jpeg") },
  { id: 7, source: require("../assets/tshirt.jpeg") },
  { id: 8, source: require("../assets/ashtshirt.jpeg") },
  // ...add as many items as you need
];

const CARD_WIDTH = "47%";
const CARD_HEIGHT = 200;
const MIN_ITEMS_CONTAINER_HEIGHT = "70%";

const MyClosetScreen = ({ navigation }) => {
  const handleAddItems = () => {
    navigation.navigate("camera");
  };
  const renderContent = () => {
    if (items.length === 0) {
      return (
        <TouchableOpacity style={styles.watermarkContainer}>
          <IconButton
            icon="plus"
            size={48}
            style={styles.watermarkIcon}
            color="#cccccc"
            onPress={handleAddItems}
          />
          <Text style={styles.watermarkText}>Add your clothes</Text>
        </TouchableOpacity>
      );
    } else {
      return items.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Cover source={item.source} />
        </Card>
      ));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="My Closet" titleStyle={styles.appBarTitle} />
        <View style={styles.actionButtonContainer}>
          <TouchableOpacity onPress={handleAddItems} style={styles.actionButton}>
            <Appbar.Action icon="plus" color={styles.appBarAction.color} />
          </TouchableOpacity>
        </View>
      </Appbar.Header>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryScrollContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryIcon}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.cardScrollView}>
        <View style={styles.itemsContainer}>{renderContent()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  appBar: {
    backgroundColor: "#4B371C",
    height: 85,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonContainer: {
    borderRadius: 15,
    overflow: "hidden",
  },
  actionButton: {
    backgroundColor: "#000",
  },

  appBarTitle: {
    color: "#F5F5F5",
    fontWeight: "bold",
  },
  appBarAction: {
    color: "#fff",
  },
  categoryScrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  categoryIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F8F0E3",
    elevation: 4,
  },
  categoryText: {
    textAlign: "center",
    color: "#4A3728",
    fontWeight: "bold",
  },
  cardScrollView: {
    minHeight: MIN_ITEMS_CONTAINER_HEIGHT,
  },

  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  card: {
    marginBottom: 10,
    elevation: 4,
    backgroundColor: "#F8F0E3",
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  watermarkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  watermarkIcon: {
    backgroundColor: "#e0e0e0",
    borderRadius: 24,
  },
  watermarkText: {
    color: "#cccccc",
    fontSize: 16,
    marginTop: 10,
  },
});

export default MyClosetScreen;
