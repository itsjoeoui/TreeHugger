import React from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MapView, { Marker } from "react-native-maps";
import tree from "../../assets/tree.png";

function HomeScreen({ navigation }) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 45.489724,
        longitude: -73.587916,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034,
      }}
    >
      <Marker
        coordinate={{
          latitude: 45.489724,
          longitude: -73.587916,
        }}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image style={styles.tree} source={tree} />
      </Marker>
    </MapView>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1, // Shows the Google/Apple Maps Logo
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  tree: {
    width: 50,
    height: 50,
  },
});
