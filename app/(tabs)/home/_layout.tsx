import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import React from 'react';
import { Dimensions } from 'react-native';
const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);

const windowWidth = Dimensions.get('window').width;

const Homelayout = () => {
  return (
    <>
      <TopTabs initialLayout={{ width: windowWidth }} initialRouteName="index">
        <TopTabs.Screen name="index" options={{ title: 'Discover' }} />
      </TopTabs>
    </>
  );
};

export default Homelayout;
