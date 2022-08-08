import React from 'react';
import {View, StyleSheet} from 'react-native';
import PaymentHeader from './PaymentHeader';
import PaymentStep from './PaymentStep';
import TextContainer from './TextContainer';
import PaymentMethod from './PaymentMethod';
import PaymentSecond from './PaymentSecond';
import PaymentThird from './PaymentThird';
import PriceInfo from './PriceInfo';
import Price from './Price';
import FinalAmount from './FinalAmount';
const PaymentSection = () => {
  return (
    <View style={styles.container}>
      <PaymentHeader />
      <PaymentStep />
      <TextContainer />
      <PaymentMethod />
      <PaymentSecond />
      <PaymentThird />
      <PriceInfo />
      <Price />
      <FinalAmount />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
export default PaymentSection;
