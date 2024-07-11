import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

export const assetLogo = require('../assets/logo.png');

export const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={assetLogo}
      placeholder={{ blurhash }}
      contentFit="cover"
      transition={1000}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 40,
  },
});
