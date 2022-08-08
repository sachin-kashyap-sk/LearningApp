import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NewsContent from './NewsContent';
const LatestNews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>Latest News</Text>
        <Text>See all</Text>
      </View>
      {[1, 2].map((_, index) => (
        <NewsContent key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LatestNews;
