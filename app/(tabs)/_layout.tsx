import { AntDesign, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { SvgLogo } from '~/components/icons';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          //headerShown: false,
          headerLeft: (props) => (
            <View className="ml-4">
              <SvgLogo />
            </View>
          ),
          tabBarIcon: ({ color, focused }) => <Octicons size={20} name="home" color={color} />,
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Heart',

          tabBarIcon: ({ color, focused }) => (
            <AntDesign size={20} name={focused ? 'heart' : 'hearto'} color={color} />
          ),
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <SimpleLineIcons name="globe" size={20} color={color} />,
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign size={20} name="user" color={color} />,

          tabBarLabelStyle: {
            display: 'none',
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
