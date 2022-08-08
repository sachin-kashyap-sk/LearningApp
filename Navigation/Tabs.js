import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../LoginPage';
import Register from '../RegisterPage';
import Learning from '../Learning';
import PaymentSection from '../PaymentPage';
import {View, Text, Image} from 'react-native';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}>
              <Text>
                <Image
                  source={require('../Assets/Home.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#51C3FE' : '#666',
                  }}
                />
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}>
              <Text>
                <Image
                  source={require('../Assets/Group.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#51C3FE' : '#666',
                  }}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Learning}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}>
              <Text>
                <Image
                  source={require('../Assets/Profile.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#51C3FE' : '#666',
                  }}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="payment" component={PaymentSection} />
    </Tab.Navigator>
  );
};

export default Tabs;
