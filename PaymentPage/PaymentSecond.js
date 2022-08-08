import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const PaymentSecond = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_Container}>
        <Text style={styles.text}>
          <Image source={require('../Assets/FilledDot.png')} />
          PayPal
        </Text>
        <View style={styles.Visa}>
          <Image style={styles.Visa} source={require('../Assets/Paypal.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },

  text: {
    color: '#51C3FE',
    fontSize: 14,
    fontWeight: '600',
  },

  inner_Container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#51C3FE',
  },

  Visa: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
});
export default PaymentSecond;
