import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';

const CreateOutfitsScreen = () => {
  const [text, setText] = useState('');

  const handleEnterPress = () => {
    Keyboard.dismiss();
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your style or item"
        placeholderTextColor="#9A7B4F"
        value={text}
        onChangeText={setText}
      />
      <Button
        mode="elevated"
        onPress={handleEnterPress}
        uppercase={true}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Find
      </Button>
    </View>
  );
};

export default CreateOutfitsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3F301D', 
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 16,
    color: '#3C280D',
    marginBottom: 20,
  },
  button: {
    padding: 4,
    paddingHorizontal: 20,
    backgroundColor:"#765952",
    borderRadius: 0
  },
  buttonLabel: {
    color: "#FFF", 
  },

});
