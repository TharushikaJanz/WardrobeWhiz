import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

const RegisterScreen = ({navigation}) => {
  const [fullName, setFullName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          label="Full Name"
          value={fullName}
          onChangeText={text => setFullName(text)}
          mode="flat"
          underlineColor='#fff'
          style={styles.input}
        //   left={<TextInput.Icon name="account-outline" />} // Change the icon as per your preference
        />
        <TextInput
          label="Phone No"
          value={phone}
          onChangeText={text => setPhone(text)}
          mode="flat"
          underlineColor='#fff'
          style={styles.input}
          keyboardType="phone-pad"
        //   left={<TextInput.Icon name="phone-outline" />} // Change the icon as per your preference
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          mode="flat"
          underlineColor='#fff'
          style={styles.input}
        //   left={<TextInput.Icon name="email-outline" />} // Change the icon as per your preference
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          mode="flat"
          underlineColor='#fff'
          secureTextEntry
          style={styles.input}
        //   right={<TextInput.Icon name="eye-off-outline" />} // Assuming you are using Material Community Icons
        />
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          mode="flat"
          underlineColor='#fff'
          secureTextEntry
          style={styles.input}
        //   right={<TextInput.Icon name="eye-off-outline" />} // Assuming you are using Material Community Icons
        />
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          REGISTER
        </Button>
        <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('signIn')}>
          <Text style={styles.signInText}>
            Have an Account? <Text style={styles.signInButtonText}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf8f6',
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 35,
    alignSelf: 'center',
    color: '#000',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    marginTop: 40,
    borderRadius: 5,
    paddingVertical: 4,
    backgroundColor: '#765952',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  signIn: {
    marginTop: 25,
    alignItems: 'center',
  },
  signInText: {
    color: '#000',
  },
  signInButtonText: {
    fontWeight: 'bold',
    color: '#765952',
    fontSize: 16
  },
});

export default RegisterScreen;
