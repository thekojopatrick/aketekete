import { Link, Stack } from 'expo-router';
import { Text, View, useColorScheme } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function Home() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="bg-background flex-1">
        <Container>
          <Text>{colorScheme}</Text>
          <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
            <Button title="Show Details" />
          </Link>
        </Container>
      </View>
    </>
  );
}
