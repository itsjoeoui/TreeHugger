import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import firebase from 'firebase/app';
import MapView from 'react-native-maps';
import { SocialIcon } from 'react-native-elements';

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
      <MapView style={styles.map}
        initialRegion={{
          latitude: 45.489724,
          longitude: -73.587916,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034,
        }}
      />
      <TouchableOpacity style={styles.googlelogin}>
        <SocialIcon
          title='Sign in With Google'
          button
          type='google'
        />
      </TouchableOpacity>
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
  googlelogin: {
    position: 'absolute',
    width: Dimensions.get('window').width/1.5,
    bottom: Dimensions.get('window').height/10,
  },
});
