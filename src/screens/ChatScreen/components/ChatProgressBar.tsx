import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { colors } from '../../../theme/colors';

type ChatProgressBarProps = {
  progress: number;
};

export function ChatProgressBar({ progress }: ChatProgressBarProps) {
  const progressPercent = useRef(new Animated.Value(progress * 100)).current;

  useEffect(() => {
    Animated.timing(progressPercent, {
      toValue: progress * 100,
      duration: 450,
      useNativeDriver: false,
    }).start();
  }, [progress, progressPercent]);

  return (
    <View style={styles.track}>
      <Animated.View
        style={[
          styles.fill,
          {
            width: progressPercent.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderRadius: 3,
    height: 6,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 3,
    height: 6,
  },
});
