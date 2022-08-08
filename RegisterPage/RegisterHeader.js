import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
const RegisterHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.time}>09:41</Text>
      </View>
      <View style={styles.secondContainer}>
        <Image style={styles.cell} source={require('../Assets/Cellular.png')} />
        <Image style={styles.wifi} source={require('../Assets/Wifi.png')} />
        <Image
          style={styles.battery}
          source={require('../Assets/Battery.png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 390,
    height: 40,
    backgroundColor: '#FFFF !important',
  },
  secondContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 240,
    width: 70,
    backgroundColor: '#fff !important',
    height: 40,
    justifyContent: 'space-between',
  },
  time: {
    color: '#000',
    fontWeight: '800',
    marginLeft: 10,
  },
});

export default RegisterHeader;
