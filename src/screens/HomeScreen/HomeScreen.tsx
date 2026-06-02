import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';
import { HomeHeader } from './components/HomeHeader';
import { HomeRecommendation } from './components/HomeRecommendation';
import { useHomeHeader } from './hooks/useHomeHeader';
import { useHomeRecommendation } from './hooks/useHomeRecommendation';

export default function HomeScreen() {
  const { data: homeHeader } = useHomeHeader();
  const { data: recommendation } = useHomeRecommendation();

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader data={homeHeader} />
      <View style={styles.content}>
        <HomeRecommendation data={recommendation} />
      </View>
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
