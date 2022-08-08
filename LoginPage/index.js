import React from 'react';
import {View} from 'react-native';
import Header from './Header';
import MiddlePart from './MiddlePart';
import Greetings from './Greetings';
import LoginSection from './LoginSection';
const Login = () => {
  return (
    <View>
      <Header />
      <MiddlePart />
      <Greetings />
      <LoginSection />
    </View>
  );
};

export default Login;
