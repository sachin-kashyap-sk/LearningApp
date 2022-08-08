import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const PaymentThird = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_Container}>
        <Text style={styles.text}>
          <Image source={require('../Assets/Dot.png')} />
          Apple pay
        </Text>
        <View style={styles.Visa}>
          <Image
            style={styles.Visa}
            source={require('../Assets/ApplePay.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
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
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
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
export default PaymentThird;
