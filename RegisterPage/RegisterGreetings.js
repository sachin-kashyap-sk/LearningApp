import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RegisterGreetings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, Let’s Make a</Text>
      <Text style={styles.text}>Journey with Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#fff !important',
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
  },
});
export default RegisterGreetings;
