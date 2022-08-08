import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const SubHeading = () => {
  return (
    <View>
      <Text style={styles.message}>What do you want to learn today?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    paddingLeft: 10,
    fontSize: 14,
    color: '#888888',
  },
});

export default SubHeading;
