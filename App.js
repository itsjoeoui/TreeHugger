import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "./src/screens/Chat";
import HomeScreen from "./src/screens/Home";
import ProfileScreen from "./src/screens/Profile";
import SettingsScreen from "./src/screens/Settings";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

function HomeStack() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
      <MainTab.Screen name="Settings" component={SettingsScreen} />
    </MainTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="Chat" component={ChatScreen} />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
