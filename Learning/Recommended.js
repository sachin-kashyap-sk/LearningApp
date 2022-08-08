import React from 'react';
import {ScrollView} from 'react-native';
import Course from './Course';
const Recommended = () => {
  return (
    <ScrollView horizontal={true}>
      {[1, 2, 3].map((_, index) => (
        <Course key={index} />
      ))}
    </ScrollView>
  );
};

export default Recommended;
