import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextContainer = () => {
  return (
    <View style={Styles.Text_container}>
      <Text>Review</Text>
      <Text>PaymentMethod</Text>
      <Text>Payment</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  Text_container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
});

export default TextContainer;
