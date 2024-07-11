import { FontAwesome5 } from '@expo/vector-icons';
import Constant from 'expo-constants';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BackButton from '~/components/BackButton';
import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import { Google } from '~/components/icons';
import { colors } from '~/theme/colors';

//const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AuthLogin = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <View style={styles.headerContentContainer}>
          <Logo />
          <Text style={styles.slogan}>HANDCRAFTED MADE IN GHANA</Text>
        </View>
      </View>
      <Container>
        <View style={styles.bottomContainer}>
          <Text className="mb-2 text-2xl font-semibold">Welcome to Aketekete!</Text>
          <Text className="w-[90%] text-center text-lg text-neutral-500">
            Create an account and get access to exclusive offers and a personalized shopping
            experience!
          </Text>
          <View className="mt-auto w-full items-center gap-3">
            <TouchableOpacity
              className="w-full flex-row items-center justify-center gap-2 border border-neutral-200 px-6 py-3"
              onPress={handleSignIn}>
              <Google />
              <Text className="text-lg font-medium">Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-full flex-row items-center justify-center gap-2 bg-[#0087FF] px-4 py-3"
              onPress={handleSignIn}>
              <FontAwesome5 name="facebook" size={24} color="white" />
              <Text className="text-lg font-medium text-white">Sign in with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-full flex-row items-center justify-center gap-2  bg-black px-4 py-3"
              onPress={handleSignIn}>
              <FontAwesome5 name="apple" size={24} color="white" />
              <Text className="text-lg font-medium text-white">Contiune with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5 flex-row items-center gap-1 px-4 py-2"
              onPress={handleSignIn}>
              <Text className="text-lg font-medium">Already have an account?</Text>
              <Text className="text-lg font-medium text-blue-500">Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: windowHeight / 3,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingTop: Constant.statusBarHeight,
  },
  headerContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slogan: {
    color: colors.tertiary,
  },
  bottomContainer: {
    flex: 1,
    marginTop: 40,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});

export default AuthLogin;
