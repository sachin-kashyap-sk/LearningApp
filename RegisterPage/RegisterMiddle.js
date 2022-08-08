import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const RegisterMiddle = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/Vector.png')} />
      <View>
        <Text style={styles.text}>EDUCA </Text>
        <Text style={styles.text}>APP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#fff !important',
  },

  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '800',
  },
});

export default RegisterMiddle;
