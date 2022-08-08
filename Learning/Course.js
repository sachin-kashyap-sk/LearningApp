import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const Course = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/SubjectImage.png')} />
      <Text style={styles.title}>Mathematics</Text>
      <View style={styles.titleCont}>
        <Text style={styles.courseTitle}>
          High School Algebra I: Help and ReviewHelp and Review
        </Text>
      </View>
      <View style={styles.process}>
        <Image source={require('../Assets/Rectangle.png')} />
        <Text>5/10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 180,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 5,
    borderColor: '#EBEBEB',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  title: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    padding: 5,
  },
  titleCont: {
    width: '100%',
  },
  courseTitle: {
    fontSize: 11,
    color: '#000',
    fontStyle: 'normal',
    padding: 5,
  },
  process: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
});

export default Course;
