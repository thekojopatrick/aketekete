import { Platform, SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className={styles.container}>{children}</SafeAreaView>;
};

const styles = {
  container: `flex-1 ${Platform.OS === 'ios' ? 'm-4' : 'p-6'} `,
};
