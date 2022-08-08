import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const FinalAmount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total Price-------------------------</Text>
      <Text style={styles.price}>$120</Text>
      <Button title="Checkout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 60,
  },

  price: {
    color: '#181818',
    fontSize: 20,
    fontWeight: '600',
  },

  total: {
    color: '#181818',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default FinalAmount;
