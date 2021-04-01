import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import firebase from 'firebase/app';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { SocialIcon } from 'react-native-elements';
import tree from './assets/tree.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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

function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.489724,
          longitude: -73.587916,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034,
        }}>
        <Marker
          coordinate={{
            latitude: 45.489724,
            longitude: -73.587916,
          }}>
          <Image style={styles.tree} source={tree} />
        </Marker>
      </MapView>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tree Hugger">
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Home') {
                      iconName = focused
                        ? 'tree'
                        : 'tree-outline';
                      return <MaterialCommunityIcons name={iconName} size={size*1.2} color={color} />;
                    } else if (route.name === 'Profile') {
                      iconName = focused ? 'face' : 'face-outline';
                      return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Settings') {
                      iconName = focused ? 'settings' : 'settings-outline';
                      return <Ionicons name={iconName} size={size} color={color} />;
                    }
                  },
                })}
                tabBarOptions={{
                  activeTintColor: 'green',
                  inactiveTintColor: 'gray',
                }}
              >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark'/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  tree: {
    width: 40,
    height: 40,
  },
});
