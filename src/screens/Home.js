import React from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MapView, { Marker } from "react-native-maps";
import _ from "lodash";
import treeMarker from "../../assets/tree.png";

function HomeScreen({ navigation }) {
  // TODO Fetch tree data from Firebase.
  // TODO Navigate to diff chat window when diff tree is pressed.
  const trees = [
    {
      key: 1,
      coordinate: {
        latitude: 45.488624,
        longitude: -73.587916,
      },
      onPress: () => navigation.navigate("Chat"),
    },
    {
      key: 2,
      coordinate: {
        latitude: 45.490044,
        longitude: -73.588936,
      },
      onPress: () => navigation.navigate("Chat"),
    },
    {
      key: 3,
      coordinate: {
        latitude: 45.490644,
        longitude: -73.587236,
      },
      onPress: () => navigation.navigate("Chat"),
    },
  ];

  const renderTrees = () => {
    const renderedTrees = _.map(trees, (tree) => {
      const { key, coordinate, onPress } = tree;
      return (
        <Marker key={key} coordinate={coordinate} onPress={onPress}>
          <Image style={styles.tree} source={treeMarker} />
        </Marker>
      );
    });
    return renderedTrees;
  };

  // TODO Set the initialRegion based on user's location.
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
      {renderTrees()}
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
