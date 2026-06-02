import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import type { HomeRecommendationData } from '../../../types/home';

const lumoImage = require('../../../../assets/images/lumo-happy-chat.png');

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
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  assistant: {
    alignItems: 'center',
    marginRight: 12,
    width: 56,
  },
  assistantImage: {
    borderColor: colors.backgroundMuted,
    borderRadius: 28,
    borderWidth: 1,
    height: 56,
    width: 56,
  },
  assistantName: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 17,
    marginTop: 4,
  },
  messageBubble: {
    borderColor: colors.backgroundMuted,
    borderRadius: 14,
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  message: {
    color: colors.textPrimary,
    fontSize: 15,
    lineHeight: 22,
  },
  messageEmphasis: {
    color: colors.accent,
    fontWeight: '700',
  },
});
