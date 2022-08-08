import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

const LoginSection = () => {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <View>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.user}>Username/Email</Text>
        <TextInput
          style={styles.input}
          placeholder="christina.angela123"
          placeholderTextColor={'#000'}
        />
        <Text style={styles.user}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor={'#000'}
        />
        <View style={styles.inner_container}>
          <Text>Forget Password?</Text>
        </View>
        <View style={styles.btn}>
          <Button style={styles.button} title="Login">
            Login
          </Button>
        </View>
        <View>
          <View style={styles.footer}>
            <Text>
              Don’t have an account?
              <Text style={styles.register}>Register</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    minHeight: 900,
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#FDFDFD',
  },
  inner_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
    color: '#4F4F4F',
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
    placeholderTextColor: 'red',
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

export default LoginSection;
