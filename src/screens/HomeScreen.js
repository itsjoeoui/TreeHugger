import React from 'react';
import { Dimensions, StyleSheet, View, Image} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import tree from '../assets/tree.png';

const HomeScreen = () => {
  return (
    <View
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
    </View>
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

export default HomeScreen;
