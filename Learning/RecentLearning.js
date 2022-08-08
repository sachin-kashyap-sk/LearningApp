import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Course from './Course';
const RecentLearning = () => {
  return (
    <View style={styles.recentContainer}>
      <Text style={styles.heading}>Recent Learning</Text>
      <ScrollView horizontal={true}>
        {[1, 2, 3].map((_, index) => (
          <Course key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  recentContainer: {
    marginBottom: 5,
  },
  heading: {
    marginBottom: 4,
  },
});
export default RecentLearning;
