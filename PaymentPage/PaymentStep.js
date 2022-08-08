import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const PaymentStep = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.main_container}>
        <Image source={require('../Assets/Review.png')} />
        {/* <Image source={require('../Assets/Line.png')}></Image> */}
        <Text style={Styles.line}>------------------------------</Text>
        <Image source={require('../Assets/PaymentTransfer.png')} />
        <Text>--------------------------------</Text>
        <Image source={require('../Assets/Payment.png')} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 1,
    padding: 12,
  },
  main_container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 14,
  },
  line: {
    color: '#51C3FE',
  },
});
export default PaymentStep;
