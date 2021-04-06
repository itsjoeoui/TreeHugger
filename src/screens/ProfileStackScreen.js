import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
// import { SocialIcon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import newMessage from "../assets/newmessage.png";
import one from "../assets/1.png";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

const Profile = () => (
  <ScrollView style={styles.scrollView}>
    <UserInfo />
    <View
      style={{
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
      }}
    >
      <Text style={[styles.textCenter, { fontSize: 20 }]}>New Updates</Text>
      <Pressable>
        <Text style={{ fontSize: 16, textAlignVertical: "bottom" }}>
          View All
        </Text>
      </Pressable>
    </View>
    <View style={styles.line} />
    <Updates />
    <Updates />
    <View
      style={{
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
      }}
    >
      <Text style={[styles.textCenter, { fontSize: 20 }]}>Achievements</Text>
      <Pressable>
        <Text style={{ fontSize: 16, textAlignVertical: "bottom" }}>
          View All
        </Text>
      </Pressable>
    </View>
    <View style={styles.line} />
    <Achievements />
  </ScrollView>
);

const UserInfo = () => (
  <View style={[styles.container, { justifyContent: "flex-start" }]}>
    <View style={{ flexDirection: "row" }}>
      <Image
        style={styles.image}
        source={{
          uri: "https://avatars0.githubusercontent.com/u/25695219?v=4",
        }}
      />
      <View
        style={[
          styles.container,
          { flexDirection: "column", alignItems: "center" },
        ]}
      >
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={[styles.textCenter, { fontSize: 26 }]}
        >
          Joey Yu
        </Text>
        <Text style={[styles.textCenter, { fontSize: 16 }]}>Level: 23</Text>
      </View>
    </View>
  </View>
);

const Updates = () => (
  <TouchableOpacity>
    <View
      style={[
        styles.container,
        {
          borderWidth: 1,
          marginTop: 10,
          backgroundColor: "white",
          justifyContent: "flex-start",
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 50, height: 50, marginHorizontal: 10 }}
          source={newMessage}
        />
        <View
          style={[
            styles.container,
            { flexDirection: "column", alignItems: "center" },
          ]}
        >
          <Text style={[styles.textCenter, { fontSize: 16 }]}>
            New reply to your message on Tree!
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const Achievements = () => (
  <View
    style={[
      styles.container,
      {
        borderWidth: 1,
        marginTop: 10,
        backgroundColor: "white",
        justifyContent: "flex-start",
      },
    ]}
  >
    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
      <Image
        style={{
          width: 45,
          height: 45,
          marginHorizontal: 10,
          marginVertical: 5,
        }}
        source={one}
      />
      <View
        style={[
          styles.container,
          { flexDirection: "column", alignItems: "center" },
        ]}
      >
        <Text style={[styles.textCenter, { fontSize: 16 }]}>
          Leave your first message.
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    margin: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 85,
    marginRight: 15,
  },
  textCenter: {
    textAlign: "left",
    textAlignVertical: "center",
    alignSelf: "stretch",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  line: {
    padding: 0,
    width: "100%",
    alignSelf: "center",
    borderWidth: 1,
  },
});

export default ProfileStackScreen;
