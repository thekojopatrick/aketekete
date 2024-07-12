import Constant from 'expo-constants';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { Button, SecondaryButton } from '~/components/Button';
import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';

//Remote location
//const image = { uri: 'https://docs.expo.dev/static/images/tutorial/background-image.png' };
//https://unsplash.com/photos/woman-walking-on-seaside-while-holding-woven-bag-68csPWTnafo

//Local location
const assetImage = require('../assets/welcome.png');

const Welcome = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ title: 'Welcome' }} />
      <StatusBar style="light" />
      <View style={styles.container}>
        <ImageBackground source={assetImage} style={styles.image}>
          <Container>
            <View style={styles.logoContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Logo />
            </View>
            <Text style={styles.text}>Have your own unique and special piece</Text>
            <Button title="Get started" onPress={() => router.push('/login')} />
            <SecondaryButton
              title="Continue as Guest"
              onPress={() => router.push('/(tabs)/home')}
            />
          </Container>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    flex: 1,
    //marginTop: 40,
    marginTop: 20 + Constant.statusBarHeight,
  },
  logo: {
    width: 200,
    height: 40,
  },
  welcomeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  text: {
    flex: 1,
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '80%',
  },
});

export default Welcome;
