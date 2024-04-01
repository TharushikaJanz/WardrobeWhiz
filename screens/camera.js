import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { IconButton, Button } from "react-native-paper";

const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const microphoneStatus = await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(
        cameraStatus.status === "granted" &&
          microphoneStatus.status === "granted" &&
          mediaLibraryStatus.status === "granted"
      );
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        //   const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        console.log(data.uri);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }

      // Save to gallery if necessary
      //   await MediaLibrary.createAssetAsync(data.uri);
    }
  };

  const saveImage =async () => {
    if(image){
        try{
            await MediaLibrary.createAssetAsync(image);
            alert('Image saved successfully!')
            setImage(null)
        } catch (e) {
            console.log(e);
        }
    }
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {!image ? (
          <Camera
            ref={cameraRef}
            style={styles.preview}
            type={type}
            flashMode={flash}
          />
        ) : (
          <Image source={{ uri: image }} style={styles.imageContainer} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        {image ? (
          <View style={styles.imageButtonsContainer}>
            <Button
              icon="refresh"
              mode="elevated"
              buttonColor="#765952"
              style={{ borderRadius: 0, marginRight: 40 }}
              uppercase={true}
              labelStyle={{ fontSize: 15 }}
              textColor="#fff"
              onPress={() => setImage(null)}
            >
              Re-take
            </Button>
            <Button
              icon="check"
              mode="elevated"
              buttonColor="#765952"
              style={{ borderRadius: 0 }}
              uppercase={true}
              labelStyle={{ fontSize: 15 }}
              textColor="#fff"
              onPress={saveImage}
            >
              Save
            </Button>
          </View>
        ) : (
          <IconButton
            icon="camera"
            size={50}
            color="white"
            onPress={takePicture}
            style={styles.captureButton}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cameraContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
    resizeMode: "contain",
  },
  preview: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
  captureButton: {
    margin: 20,
    backgroundColor: "#F8F0E3",
  },
});

export default CameraScreen;
