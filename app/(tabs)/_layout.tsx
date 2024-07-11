import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
    </Tabs>
  );
};

export default TabsLayout;
