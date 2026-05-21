import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/AppNavigator';
import { loadingMessages } from '../constants/loadingMessages';
import ProgressBar from '../components/ProgressBar';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Loading'>;
};

const DURATION = 2800;

function randomMessage() {
  return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
}

export default function LoadingScreen({ navigation }: Props) {
  const [message] = useState(randomMessage);
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
          LumoGo
        </Animated.Text>
        <Animated.Text style={[styles.tagline, { opacity: subtitleOpacity }]}>
          Twoja pogoda, Twój styl
        </Animated.Text>
      </View>

      <View style={styles.bottom}>
        <Animated.Text style={styles.message}>
          {message}
        </Animated.Text>
        <ProgressBar
          duration={DURATION}
          onComplete={() => navigation.replace('Main')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDefault,
    paddingHorizontal: 40,
    paddingBottom: 56,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 52,
    fontWeight: '800',
    color: colors.backgroundPrimary,
    letterSpacing: -1.5,
  },
  tagline: {
    fontSize: 15,
    color: colors.backgroundLight,
    letterSpacing: 0.4,
  },
  bottom: {
    gap: 8,
  },
  message: {
    fontSize: 13,
    color: colors.backgroundLight,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});
