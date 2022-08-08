import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SecondHeader = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.name}>Hi, Christina</Text>
      <Image
        style={styles.notification}
        source={require('../LoginPage/Assets/Notification.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#FFFF !important',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  name: {
    fontSize: 24,
    color: '#181818',
    backgroundColor: '#FFF !important',
  },
  notification: {
    backgroundColor: '#FFF  !important',
  },
});

export default SecondHeader;
