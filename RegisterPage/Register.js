import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
} from 'react-native';

const Register = () => {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <View>
        <Text style={styles.login}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#000'}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#000'}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor={'#000'}
        />

        <View style={styles.inner_container}>
          <Text>Register As a?</Text>
        </View>

        <View style={styles.image_container}>
          <Text style={styles.radio}>
            <Image source={require('../Assets/FilledDot.png')} /> Student
          </Text>
          <Text style={styles.radio}>
            <Image source={require('../Assets/Dot.png')} /> Teacher
          </Text>
        </View>
        <View style={styles.btn}>
          <Button style={styles.button} title="Register">
            Register
          </Button>
        </View>
        <View>
          <View style={styles.footer}>
            <Text>
              Have an account?
              <Text style={styles.register}> Login</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    minHeight: 900,
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#FDFDFD',
  },
  inner_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 14,
    color: '#181818',
  },

  radio: {
    marginRight: 30,
  },

  image_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  login: {
    color: '#181818',
    fontSize: 18,
    fontWeight: '400',
  },

  user: {
    color: '#181818',
    fontSize: 11,
    fontWeight: '400',
    marginTop: 10,
  },

  input: {
    borderBottomColor: '#9D9B9B',
    borderBottomWidth: 1,
    color: '#000',
    marginTop: 10,
  },

  btn: {
    display: 'flex',
    width: '100%',
    textAlign: 'centre',
    justifyContent: 'center',
    padding: 20,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#181818',
    fontSize: 12,
    fontWeight: '400',
  },
  register: {
    color: '#51C3FE',
  },
});

export default Register;
