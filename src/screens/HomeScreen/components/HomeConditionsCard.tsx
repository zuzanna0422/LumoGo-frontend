import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { t, type TranslationKey } from '../../../i18n';
import { colors } from '../../../theme/colors';
import type { HomeConditionsData, HomeConditionsStatus } from '../../../types/home';
import {
  getHomeConditionsMaxScore,
  getHomeConditionMetrics,
  getHomeConditionsScore,
  getHomeConditionsStatus,
} from '../utils/homeConditions';

type HomeConditionsCardProps = {
  data: HomeConditionsData;
};

const statusLabelKeys: Record<HomeConditionsStatus, TranslationKey> = {
  good: 'home.conditions.status.good',
  moderate: 'home.conditions.status.moderate',
  poor: 'home.conditions.status.poor',
};

const statusTones: Record<
  HomeConditionsStatus,
  { backgroundColor: string; borderColor: string; color: string }
> = {
  good: {
    backgroundColor: colors.conditionGoodBackground,
    borderColor: colors.conditionGoodBorder,
    color: colors.conditionGood,
  },
  moderate: {
    backgroundColor: colors.conditionModerateBackground,
    borderColor: colors.conditionModerateBorder,
    color: colors.conditionModerate,
  },
  poor: {
    backgroundColor: colors.conditionPoorBackground,
    borderColor: colors.conditionPoorBorder,
    color: colors.conditionPoor,
  },
};

export function HomeConditionsCard({ data }: HomeConditionsCardProps) {
  const score = getHomeConditionsScore(data);
  const maxScore = getHomeConditionsMaxScore(data);
  const status = getHomeConditionsStatus(data);
  const statusTone = statusTones[status];
  const metrics = getHomeConditionMetrics(data);

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <View style={styles.scoreCopy}>
          <Text adjustsFontSizeToFit minimumFontScale={0.75} numberOfLines={1} style={styles.title}>
            {t('home.conditions.title')}
          </Text>
          <Text
            adjustsFontSizeToFit
            minimumFontScale={0.75}
            numberOfLines={1}
            style={[styles.score, { color: statusTone.color }]}
          >
            {score}
          </Text>
          <Text adjustsFontSizeToFit minimumFontScale={0.72} numberOfLines={1} style={styles.scoreSuffix}>
            {t('home.conditions.pointsSuffix', { maxScore })}
          </Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: statusTone.backgroundColor,
              borderColor: statusTone.borderColor,
            },
          ]}
        >
          <Text
            adjustsFontSizeToFit
            minimumFontScale={0.8}
            numberOfLines={1}
            style={[styles.statusText, { color: statusTone.color }]}
          >
            {t(statusLabelKeys[status])}
          </Text>
        </View>
      </View>

      <View style={styles.metricsGrid}>
        {metrics.map((metric) => (
          <View key={metric.id} style={styles.metricTile}>
            <Text
              adjustsFontSizeToFit
              minimumFontScale={0.62}
              numberOfLines={1}
              style={styles.metricLabel}
            >
              {t(metric.labelKey)}
            </Text>
            <Text
              adjustsFontSizeToFit
              minimumFontScale={0.72}
              numberOfLines={1}
              style={[styles.metricValue, metric.accented ? styles.metricValueAccent : undefined]}
            >
              {metric.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 20,
    elevation: 5,
    marginHorizontal: 20,
    marginTop: 26,
    paddingBottom: 20,
    paddingHorizontal: 18,
    paddingTop: 18,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 5,
  },
  summary: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreCopy: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
    minWidth: 0,
    paddingLeft: 8,
    paddingRight: 9,
  },
  title: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 19,
  },
  score: {
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 36,
    marginTop: 4,
  },
  scoreSuffix: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 19,
    marginTop: 6,
  },
  statusBadge: {
    alignItems: 'center',
    borderRadius: 19,
    borderWidth: 1.25,
    flexDirection: 'row',
    height: 36,
    justifyContent: 'center',
    minWidth: 68,
    paddingHorizontal: 12,
  },
  statusText: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
    rowGap: 10,
    width: '100%',
  },
  metricTile: {
    alignItems: 'center',
    backgroundColor: colors.homeMetricBackground,
    borderRadius: 12,
    flexGrow: 0,
    flexShrink: 1,
    justifyContent: 'center',
    minHeight: 56,
    minWidth: 0,
    paddingHorizontal: 2,
    width: '48%',
  },
  metricValue: {
    color: colors.textMuted,
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 20,
    marginTop: 2,
    maxWidth: '100%',
  },
  metricValueAccent: {
    color: colors.conditionMetricAccent,
  },
  metricLabel: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 15,
    maxWidth: '100%',
  },
});
