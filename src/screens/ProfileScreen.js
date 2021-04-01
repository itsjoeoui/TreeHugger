import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <View style={styles.login}>
      <TouchableOpacity>
        <SocialIcon
          title='Sign in with Google'
          light
          button
          type='google'
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SocialIcon
          title='Sign in with Twitter'
          light
          button
          type='twitter'
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SocialIcon
          title='Sign in with Facebook'
          light
          button
          type='facebook'
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
      width: '60%',
      height:"100%",
      justifyContent: 'center',
      marginLeft: '20%'
  },
});

export default ProfileScreen;
  