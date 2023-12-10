// SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import style from '../styles/LoginStyle';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { ImageBackground } from 'react-native';
const background = require('../assets/image.png');

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onPressSignUp = () => {
    // Check if the passwords match
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match. Please enter matching passwords.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed up successfully:', user);
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Sign up error:', errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <ImageBackground source={background} style={style.container}>
      <View style={style.cardContainer}>
        <View style={style.inputCard}>
          <Text style={style.labelText}>Email</Text>
          <TextInput
            onChangeText={(val) => setEmail(val)}
            value={email}
            placeholder="Enter email"
            keyboardType="email-address"
            style={style.input}
          />
        </View>
        <View style={style.inputCard}>
          <Text style={style.labelText}>Password</Text>
          <TextInput
            onChangeText={(val) => setPassword(val)}
            value={password}
            placeholder="Enter password"
            secureTextEntry={true}
            style={style.input}
          />
        </View>
        <View style={style.inputCard}>
          <Text style={style.labelText}>Confirm Password</Text>
          <TextInput
            onChangeText={(val) => setConfirmPassword(val)}
            value={confirmPassword}
            placeholder="Confirm password"
            secureTextEntry={true}
            style={style.input}
          />
        </View>
        <TouchableOpacity onPress={onPressSignUp} style={style.button}>
          <Text style={style.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={style.buttonText}>Do you have an Account?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
