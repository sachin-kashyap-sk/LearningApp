import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Greetings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Back,</Text>
      <Text style={styles.text}> Angela Christina</Text>
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
export default Greetings;
