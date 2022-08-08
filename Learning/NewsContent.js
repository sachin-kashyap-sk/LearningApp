import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const NewsContent = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/Check.png')} style={styles.image} />
      <View style={styles.content}>
        <View>
          <Text>Biology</Text>
          <Text>The Effects of Temperature on Enzyme Activity and Biology</Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text>
              <Image source={require('../Assets/Clock.png')} /> Latest News
            </Text>
          </View>
          <View>
            <Text>
              <Image source={require('../Assets/Message.png')} /> 4795
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 180,
    marginTop: 10,
  },
  image: {
    width: '50%',
    height: 'auto',
    borderRadius: 15,
  },
  content: {
    width: '50%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NewsContent;
