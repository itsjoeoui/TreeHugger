import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import MapView from 'react-native-maps'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwWy-UfGf_IUstwX1x8V64lLW1AgfLai8",
  authDomain: "treehugger-e8c37.firebaseapp.com",
  databaseURL: "https://treehugger-e8c37-default-rtdb.firebaseio.com",
  projectId: "treehugger-e8c37",
  storageBucket: "treehugger-e8c37.appspot.com",
  messagingSenderId: "467428435573",
  appId: "1:467428435573:web:42c9877057d1b7effafa3c"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp({});
}

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
