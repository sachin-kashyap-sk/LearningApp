import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Price = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.detail}>01//09/2020</Text>
      <Text style={styles.detail}> $240</Text>
      <Text style={styles.detail}>
        -$120
        <Text style={styles.percent}> (50%)</Text>
      </Text>
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
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },

  percent: {
    color: '#51C3FE',
    fontSize: 10,
    fontWeight: '400',
  },

  detail: {
    color: '#181818',
  },
});
export default Price;
