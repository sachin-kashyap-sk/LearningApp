import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
const SubjectSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Image
          style={styles.searchIcon}
          source={require('../LoginPage/Assets/Search.png')}
        />
        <TextInput
          placeholder="Search"
          style={{left: 30, fontSize: 12, color: '#4F4F4F'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
});

export default SubjectSearch;
