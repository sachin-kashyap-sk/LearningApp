import React from 'react';
import {View, Text, ScrollView} from 'react-native';
// import Footer from './Footer';
import Header from './Header';
import LatestNews from './LatestNews';
import Navbar from './Navbar';
import RecentLearning from './RecentLearning';
import Recommended from './Recommended';
import SecondHeader from './SecondHeader';
import SubHeading from './SubHeading';
import SubjectSearch from './SubjectSearch';

const Learning = () => {
  return (
    <ScrollView
      style={{padding: 10, backgroundColor: '#FFF'}}
      horizontal={false}>
      <Header />
      <SecondHeader />
      <SubHeading />
      <SubjectSearch />
      <RecentLearning />
      <Navbar />
      <Recommended />
      <LatestNews />
      {/* <Footer /> */}
    </ScrollView>
  );
};

export default Learning;
