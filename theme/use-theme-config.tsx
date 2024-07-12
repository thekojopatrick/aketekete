import { DefaultTheme, DarkTheme as _DarkTheme } from '@react-navigation/native';
import type { Theme } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import { colors } from './colors';

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: colors.primary,
    background: colors.background,
    // text: colors.text,
    // border: colors.charcoal[500],
    // card: colors.charcoal[850],
  },
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary[400],
    background: colors.background,
  },
};

export function useThemeConfig() {
  const { colorScheme } = useColorScheme();

  if (colorScheme === 'dark') return DarkTheme;

  return LightTheme;
}
