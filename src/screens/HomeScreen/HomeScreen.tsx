import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { TAB_BAR_HEIGHT, TAB_BAR_MIN_BOTTOM_OFFSET, type TabParamList } from '../../navigation/TabNavigator';
import { colors } from '../../theme/colors';
import { HomeConditionsCard } from './components/HomeConditionsCard';
import { HomeHeader } from './components/HomeHeader';
import { HomeRecommendation } from './components/HomeRecommendation';
import { HomePlannerCard } from './components/HomePlannerCard';
import { useHomeConditions } from './hooks/useHomeConditions';
import { useHomeHeader } from './hooks/useHomeHeader';
import { useHomeRecommendation } from './hooks/useHomeRecommendation';

const CONTENT_BOTTOM_SPACING = 24;

export default function HomeScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>();
  const insets = useSafeAreaInsets();
  const { data: homeHeader } = useHomeHeader();
  const { data: recommendation } = useHomeRecommendation();
  const { data: conditions } = useHomeConditions();

  const tabBarClearance = Math.max(insets.bottom, TAB_BAR_MIN_BOTTOM_OFFSET) + TAB_BAR_HEIGHT;

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <HomeHeader data={homeHeader} onAvatarPress={() => navigation.navigate('Profile')} />
      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: tabBarClearance + CONTENT_BOTTOM_SPACING }]}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <HomeRecommendation data={recommendation} />
        <HomeConditionsCard data={conditions} />
        <HomePlannerCard onPress={() => navigation.navigate('Chat')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  scrollView: {
    backgroundColor: colors.homeBackground,
  },
  content: {
    backgroundColor: colors.homeBackground,
    flexGrow: 1,
  },
});
