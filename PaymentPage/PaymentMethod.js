import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const PaymentMethod = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Payment Method</Text>
      <View style={styles.inner_Container}>
        <Text style={styles.text}>
          <Image source={require('../Assets/Dot.png')} />
          Credit Card
        </Text>
        <View style={styles.Visa}>
          <Image style={styles.Visa} source={require('../Assets/Visa.png')} />
          <Image style={styles.Visa} source={require('../Assets/Card.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
  },

  text: {
    color: '#181818',
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
    borderColor: '#E0E0E0',
  },



  Visa: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
});
export default PaymentMethod;
