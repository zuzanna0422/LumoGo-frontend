import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { colors } from '../../../theme/colors';
import type { HomeHeaderData } from '../../../types/home';

type HomeHeaderProps = {
  data: HomeHeaderData;
};

export function HomeHeader({ data }: HomeHeaderProps) {
  const locationLabel = `${data.location.city}, ${data.location.region}`;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.copy}>
          <Text style={styles.greeting}>Hej, {data.user.firstName} 👋</Text>
          <Text style={styles.location}>{locationLabel}</Text>
        </View>

        <View style={styles.avatar}>
          {data.user.avatarUrl ? (
            <Image source={{ uri: data.user.avatarUrl }} style={styles.avatarImage} />
          ) : data.user.initials ? (
            <Text style={styles.avatarInitials}>{data.user.initials}</Text>
          ) : null}
        </View>
      </View>

      <View pointerEvents="none" style={styles.shadowBand}>
        <Svg height="100%" preserveAspectRatio="none" width="100%">
          <Defs>
            <LinearGradient id="homeHeaderShadow" x1="0" x2="0" y1="0" y2="1">
              <Stop offset="0" stopColor={colors.textPrimary} stopOpacity={0.16} />
              <Stop offset="0.35" stopColor={colors.textPrimary} stopOpacity={0.07} />
              <Stop offset="1" stopColor={colors.textPrimary} stopOpacity={0} />
            </LinearGradient>
          </Defs>
          <Rect fill="url(#homeHeaderShadow)" height="100%" width="100%" x="0" y="0" />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.backgroundPrimary,
    zIndex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 26,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  shadowBand: {
    height: 18,
  },
  copy: {
    flex: 1,
    paddingRight: 16,
  },
  greeting: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
  },
  location: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 20,
    marginTop: 3,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 56,
  },
  avatarImage: {
    height: '100%',
    width: '100%',
  },
  avatarInitials: {
    color: colors.primaryDefault,
    fontSize: 18,
    fontWeight: '700',
  },
});
