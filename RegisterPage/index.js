import React from 'react';
import {View} from 'react-native';
import RegisterGreetings from './RegisterGreetings';
import RegisterHeader from './RegisterHeader';
import RegisterMiddle from './RegisterMiddle';
import Register from './Register';

const RegisterSection = () => {
  return (
    <View>
      <RegisterHeader />
      <RegisterMiddle />
      <RegisterGreetings />
      <Register />
    </View>
  );
};

export default RegisterSection;
