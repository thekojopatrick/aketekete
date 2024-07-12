import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { Container } from '~/components/Container';

export default function Home() {
  //const colorScheme = useColorScheme();
  return (
    <>
      <Stack.Screen options={{ title: 'Upcoming' }} />
      <View className="bg-background flex-1">
        <Container>
          <Text>Upcoming</Text>
        </Container>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
