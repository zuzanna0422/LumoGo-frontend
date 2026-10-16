import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { TAB_BAR_HEIGHT, TAB_BAR_MIN_BOTTOM_OFFSET } from '../../navigation/TabNavigator';
import { t, type TranslationKey } from '../../i18n';
import { colors } from '../../theme/colors';
import { homeHeaderMock } from '../../mocks/home';
import { ChatProgressBar } from './components/ChatProgressBar';

const lumoAvatar = require('../../../assets/images/profile-lumo.png');
const userAvatar = require('../../../assets/images/profile-woman.png');

const TOTAL_STEPS = 3;
const CONTENT_BOTTOM_SPACING = 24;

type ActivityOption = {
  id: string;
  emoji: string;
  labelKey: TranslationKey;
};

const ACTIVITY_OPTIONS: ActivityOption[] = [
  { id: 'walking', emoji: '🚶', labelKey: 'chat.steps.activity.options.walking' },
  { id: 'running', emoji: '🏃', labelKey: 'chat.steps.activity.options.running' },
  { id: 'gardening', emoji: '🌱', labelKey: 'chat.steps.activity.options.gardening' },
  { id: 'cycling', emoji: '🚴', labelKey: 'chat.steps.activity.options.cycling' },
  { id: 'dogWalk', emoji: '🐕', labelKey: 'chat.steps.activity.options.dogWalk' },
  { id: 'outdoorPlans', emoji: '🧺', labelKey: 'chat.steps.activity.options.outdoorPlans' },
];

export default function ChatScreen() {
  const insets = useSafeAreaInsets();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);

  const progress = currentStep / TOTAL_STEPS;
  const tabBarClearance = Math.max(insets.bottom, TAB_BAR_MIN_BOTTOM_OFFSET) + TAB_BAR_HEIGHT;

  const handleSelectActivity = (id: string) => {
    setSelectedActivityId(id);
    setCurrentStep(2);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('chat.header.title')}</Text>
        <Text style={styles.headerSubtitle}>{t('chat.header.subtitle')}</Text>
        <ChatProgressBar progress={progress} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.body, { paddingBottom: tabBarClearance + CONTENT_BOTTOM_SPACING }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.messageRow}>
          <Image source={lumoAvatar} style={styles.lumoAvatar} />
          <View style={styles.bubble}>
            <View style={styles.bubbleTail} />
            <Text style={styles.bubbleText}>
              {t('chat.steps.activity.question', { firstName: homeHeaderMock.user.firstName })}
            </Text>
          </View>
        </View>

        <View style={styles.optionsCard}>
          {ACTIVITY_OPTIONS.map((option) => {
            const selected = option.id === selectedActivityId;

            return (
              <Pressable
                key={option.id}
                onPress={() => handleSelectActivity(option.id)}
                style={({ pressed }) => [
                  styles.option,
                  selected && styles.optionSelected,
                  pressed && styles.optionPressed,
                ]}
              >
                <Text style={styles.optionEmoji}>{option.emoji}</Text>
                <Text style={[styles.optionLabel, selected && styles.optionLabelSelected]}>
                  {t(option.labelKey)}
                </Text>
                {selected ? (
                  <Ionicons color={colors.navActive} name="checkmark-circle" size={20} />
                ) : null}
              </Pressable>
            );
          })}

          <Image source={userAvatar} style={styles.userAvatar} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: colors.backgroundLight,
    flex: 1,
  },
  header: {
    backgroundColor: colors.homeBackground,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    gap: 6,
    paddingBottom: 20,
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  headerTitle: {
    color: colors.backgroundPrimary,
    fontSize: 22,
    fontWeight: '800',
  },
  headerSubtitle: {
    color: colors.backgroundPrimary,
    fontSize: 14,
    marginBottom: 6,
    opacity: 0.85,
  },
  body: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  messageRow: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 24,
  },
  lumoAvatar: {
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.homeWarmDark,
    borderRadius: 24,
    borderWidth: 1.5,
    height: 48,
    marginRight: 12,
    width: 48,
  },
  bubble: {
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 18,
    elevation: 2,
    flexShrink: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bubbleTail: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 8,
    borderRightColor: colors.backgroundPrimary,
    borderRightWidth: 10,
    borderTopColor: 'transparent',
    borderTopWidth: 8,
    bottom: 14,
    height: 0,
    left: -10,
    position: 'absolute',
    width: 0,
  },
  bubbleText: {
    color: colors.textPrimary,
    fontSize: 15,
    lineHeight: 20,
  },
  optionsCard: {
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.conditionCardBorder,
    borderRadius: 24,
    borderWidth: 1,
    gap: 10,
    padding: 14,
    paddingBottom: 26,
  },
  option: {
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.conditionCardBorder,
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  optionSelected: {
    backgroundColor: colors.conditionGoodBackground,
    borderColor: colors.navActive,
  },
  optionPressed: {
    opacity: 0.7,
  },
  optionEmoji: {
    fontSize: 18,
  },
  optionLabel: {
    color: colors.textPrimary,
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  optionLabelSelected: {
    color: colors.navActive,
  },
  userAvatar: {
    borderColor: colors.homeWarmDark,
    borderRadius: 20,
    borderWidth: 1.5,
    bottom: -16,
    height: 40,
    position: 'absolute',
    right: 14,
    width: 40,
  },
});
