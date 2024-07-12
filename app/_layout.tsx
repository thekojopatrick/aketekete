import '../global.css';

import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0, 0, 0)',
  },
};

export default function Layout() {
  return (
    <AppProviders>
      <Stack initialRouteName="welcome">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
            presentation: 'fullScreenModal',
            animation: 'slide_from_bottom',
          }}
        />
      </Stack>
    </AppProviders>
  );
}

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider value={MyTheme}>{children}</ThemeProvider>;
};
