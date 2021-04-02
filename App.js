import React from "react";
import { StatusBar } from "expo-status-bar";
import firebase from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwWy-UfGf_IUstwX1x8V64lLW1AgfLai8",
  authDomain: "treehugger-e8c37.firebaseapp.com",
  databaseURL: "https://treehugger-e8c37-default-rtdb.firebaseio.com",
  projectId: "treehugger-e8c37",
  storageBucket: "treehugger-e8c37.appspot.com",
  messagingSenderId: "467428435573",
  appId: "1:467428435573:web:42c9877057d1b7effafa3c",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
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

                    if (route.name === "Home") {
                      iconName = focused ? "tree" : "tree-outline";
                      return (
                        <MaterialCommunityIcons
                          name={iconName}
                          size={size * 1.2}
                          color={color}
                        />
                      );
                    } else if (route.name === "Profile") {
                      iconName = focused ? "face" : "face-outline";
                      return (
                        <MaterialCommunityIcons
                          name={iconName}
                          size={size}
                          color={color}
                        />
                      );
                    } else if (route.name === "Settings") {
                      iconName = focused ? "settings" : "settings-outline";
                      return (
                        <Ionicons name={iconName} size={size} color={color} />
                      );
                    }
                  },
                })}
                tabBarOptions={{
                  activeTintColor: "green",
                  inactiveTintColor: "gray",
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
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
