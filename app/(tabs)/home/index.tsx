import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { Container } from '~/components/Container';

export default function Home() {
  //const colorScheme = useColorScheme();
  return (
    <>
      <View className="bg-background flex-1">
        <Container>
          <Text>Home</Text>
        </Container>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
