import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';
import { HomeHeader } from './components/HomeHeader';
import { useHomeHeader } from './hooks/useHomeHeader';

export default function HomeScreen() {
  const { data: homeHeader } = useHomeHeader();

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader data={homeHeader} />
      <View style={styles.content} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  content: {
    flex: 1,
  },
});
