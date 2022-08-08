import React from 'react';
// import {View} from 'react-native';
import Tabs from './Navigation/Tabs';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
