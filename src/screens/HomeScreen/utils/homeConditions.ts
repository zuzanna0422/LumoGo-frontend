import type { TranslationKey } from '../../../i18n';
import type { HomeConditionsData, HomeConditionsStatus } from '../../../types/home';

type HomeConditionMetric = {
  id: 'temperature' | 'wind' | 'humidity' | 'airQuality';
  labelKey: TranslationKey;
  value: string;
  accented?: boolean;
};

const scoreThresholds: Array<{ minPercentage: number; status: HomeConditionsStatus }> = [
  { minPercentage: 80, status: 'good' },
  { minPercentage: 60, status: 'moderate' },
  { minPercentage: 0, status: 'poor' },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function getHomeConditionsScore(data: HomeConditionsData) {
  return clamp(Math.round(data.score), 0, getHomeConditionsMaxScore(data));
}

export function getHomeConditionsMaxScore(data: HomeConditionsData) {
  return data.maxScore > 0 ? Math.round(data.maxScore) : 100;
}

export function getHomeConditionsStatus(data: HomeConditionsData): HomeConditionsStatus {
  const maxScore = getHomeConditionsMaxScore(data);
  const scorePercentage = (getHomeConditionsScore(data) / maxScore) * 100;

  return scoreThresholds.find((threshold) => scorePercentage >= threshold.minPercentage)?.status ?? 'poor';
}

export function getHomeConditionMetrics(data: HomeConditionsData): HomeConditionMetric[] {
  return [
    {
      id: 'temperature',
      labelKey: 'home.conditions.metrics.temperature',
      value: `${Math.round(data.temperatureCelsius)}°C`,
    },
    {
      id: 'wind',
      labelKey: 'home.conditions.metrics.wind',
      value: `${Math.round(data.windSpeedKmh)} km/h`,
    },
    {
      id: 'humidity',
      labelKey: 'home.conditions.metrics.humidity',
      value: `${Math.round(data.humidityPercent)}%`,
    },
    {
      id: 'airQuality',
      labelKey: 'home.conditions.metrics.airQuality',
      value: `AQI ${Math.round(data.airQualityIndex)}`,
      accented: true,
    },
  ];
}
