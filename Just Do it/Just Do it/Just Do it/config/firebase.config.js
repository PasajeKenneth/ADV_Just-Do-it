// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHdwh7upZi8SaPBGke-49z57-vd2tGfgQ",
  authDomain: "bsit2b-d3bd9.firebaseapp.com",
  projectId: "bsit2b-d3bd9",
  storageBucket: "bsit2b-d3bd9.appspot.com",
  messagingSenderId: "207338537412",
  appId: "1:207338537412:web:10224a7237929f5a676491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});