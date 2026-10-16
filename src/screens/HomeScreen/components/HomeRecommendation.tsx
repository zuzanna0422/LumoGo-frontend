import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import type { HomeRecommendationData } from '../../../types/home';

const lumoImage = require('../../../../assets/images/profile-lumo.png');

type HomeRecommendationProps = {
  data: HomeRecommendationData;
};

export function HomeRecommendation({ data }: HomeRecommendationProps) {
  return (
    <View style={styles.container}>
      <View style={styles.assistant}>
        <Image source={lumoImage} style={styles.assistantImage} />
        <Text style={styles.assistantName}>{data.assistantName}</Text>
      </View>

      <View style={styles.messageBubble}>
        <View style={styles.messageTail} />
        <Text style={styles.message}>
          {data.messageParts.map((part, index) => (
            <Text
              key={`${part.text}-${index}`}
              style={part.emphasized ? styles.messageEmphasis : undefined}
            >
              {part.text}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 28,
    paddingTop: 20,
  },
  assistant: {
    alignItems: 'center',
    marginRight: 18,
    width: 76,
  },
  assistantImage: {
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.homeWarmDark,
    borderRadius: 38,
    borderWidth: 1.5,
    height: 76,
    width: 76,
  },
  assistantName: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4,
  },
  messageBubble: {
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 22,
    flex: 1,
    minHeight: 126,
    paddingHorizontal: 24,
    paddingVertical: 21,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  messageTail: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 12,
    borderRightColor: colors.backgroundPrimary,
    borderRightWidth: 18,
    borderTopColor: 'transparent',
    borderTopWidth: 12,
    bottom: 16,
    height: 0,
    left: -16,
    position: 'absolute',
    width: 0,
  },
  message: {
    color: colors.textPrimary,
    fontSize: 16,
    lineHeight: 21,
  },
  messageEmphasis: {
    color: colors.accent,
    fontWeight: '700',
  },
});
