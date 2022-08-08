import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.tabSelected}>Recommended</Text>
      <Text style={styles.tab}>Algebra</Text>
      <Text style={styles.tab}>Geometry</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    padding: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    boxSizing: 'border-box',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  tabSelected: {
    padding: 10,
    borderBottomColor: '#51C3FE',
    borderBottomWidth: 4,
    borderBottomStyle: 'solid',
  },
  tab: {
    padding: 10,
  },
});

export default Navbar;
