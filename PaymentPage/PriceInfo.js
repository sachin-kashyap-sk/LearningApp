import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PriceInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.detail}>Purchase Date</Text>
      <Text style={styles.detail}>Price</Text>
      <Text style={styles.detail}>Discount</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: 75,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  detail: {
    color: '#181818',
  },
});
export default PriceInfo;
