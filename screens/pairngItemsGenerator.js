import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Appbar, Card, IconButton, Button } from "react-native-paper";

const CARD_WIDTH = "47%";
const CARD_HEIGHT = 200;
const MIN_ITEMS_CONTAINER_HEIGHT = "70%";

const PairingItemsGeneratingScreen = ({ route, navigation }) => {
  const { imageUrl } = route.params;
// const [matchinItems, setMatchingItems] = useState([]);

//   useEffect(() => {
//     const fetchSimilarItems = async () => {
//       try {
//         const response = await fetch("YOUR_BACKEND_API_URL", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ imageUrl }),
//         });
//         const data = await response.json();
//         setItems(data.items); // Assuming your backend returns a list of items
//       } catch (error) {
//         console.error("Error fetching similar items:", error);
//       }
//     };

//     fetchSimilarItems();
//   }, [imageUrl]);


  // Dummy images data
  const matchinItems = [
    { id: 1, source: require("../assets/bluetshirt.jpeg") },
    { id: 2, source: require("../assets/bluetshirt.jpeg") },
    { id: 3, source: require("../assets/bluetshirt.jpeg") },
    { id: 4, source: require("../assets/bluetshirt.jpeg") },
    { id: 5, source: require("../assets/bluetshirt.jpeg") },
    { id: 6, source: { uri: imageUrl } },
  ];


  const handleAddItems = () => {
    navigation.navigate("camera");
  };

  const renderContent = () => {
    if (matchinItems.length === 0) {
      return (
        <TouchableOpacity style={styles.watermarkContainer}>
          <Button
            icon=""
            mode="elevated"
            buttonColor="#fff"
            style={[styles.watermarkIcon, { marginBottom: 10 }]}
            uppercase={true}
            labelStyle={{ fontSize: 15 }}
            textColor="#000"
            onPress={handleAddItems}
          >
            Try a new Item
          </Button>
          <Text style={styles.watermarkText}>
            There's no pairing items in your closet to this item
          </Text>
        </TouchableOpacity>
      );
    } else {
      return matchinItems.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Cover source={item.source} />
        </Card>
      ));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content
          title="Pairing Items You Have"
          titleStyle={styles.appBarTitle}
        />
        <View style={styles.actionButtonContainer}>
          <TouchableOpacity
            onPress={handleAddItems}
            style={styles.actionButton}
          >
            <Appbar.Action icon="plus" color={styles.appBarAction.color} />
          </TouchableOpacity>
        </View>
      </Appbar.Header>

      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.uploadedImage} />
        <Text style={styles.uploadedItemText}>Item You Uploaded</Text>
      </View>

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
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  uploadedImage: {
    width: "80%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  uploadedItemText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B371C",
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
    // minHeight: MIN_ITEMS_CONTAINER_HEIGHT,
    paddingTop: 15,
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
    paddingTop: 60,
  },
  watermarkIcon: {
    backgroundColor: "#e0e0e0",
    borderRadius: 24,
  },
  watermarkText: {
    color: "#cccccc",
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center'
  },
});

export default PairingItemsGeneratingScreen;
