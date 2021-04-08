import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { createStackNavigator } from "@react-navigation/stack";
import tree from "../assets/tree.png";
import Message from "./MessageScreen";
import person from "../assets/person.png";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Message" component={Message} />
    </HomeStack.Navigator>
  );
};

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        marginVertical: -69,
      }}
    >
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
            latitude: 45.489524,
            longitude: -73.587716,
          }}
        >
          <Image style={styles.person} source={person} />
        </Marker>
        <Marker
          coordinate={{
            latitude: 45.489824,
            longitude: -73.588016,
          }}
          onPress={() => navigation.navigate("Message")}
        >
          <Image style={styles.tree} source={tree} />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  tree: {
    width: 50,
    height: 50,
  },
  person: {
    width: 50,
    height: 50,
  },
});

export default HomeStackScreen;
