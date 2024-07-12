import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'In stock' }} />
      <View className="bg-background flex-1">
        <Container>
          <Text>In Stock</Text>
        </Container>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
