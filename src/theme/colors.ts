const palette = {
  green50: '#EAF7EF',
  green100: '#D8F0DE',
  green200: '#CDEDD8',
  green400: '#8FBC8F',
  green500: '#79C08B',
  green600: '#6F8F75',
  greenAccent: '#55D683',

  teal500: '#16BFA8',

  amber50: '#F5DFB8',
  amber200: '#CF8500',
  amber600: '#955528',

  red50: '#FFF1F1',
  red200: '#E7BBBB',
  red600: '#BE5B5B',

  peach50: '#FBE3C7',
  peach600: '#B27443',

  sage600: '#56635B',
  sage400: '#8A968E',
  sage200: '#B8C0BA',

  neutral900: '#1E1E1E',
  neutral700: '#7A7A7A',
  neutral500: '#7A7A7A',
  neutral300: '#B3B3B3',
  neutral100: '#F1F1F1',
  white: '#FFFFFF',
} as const;

export const colors = {
  backgroundPrimary: palette.white,
  backgroundLight: palette.green50,
  backgroundMuted: palette.green100,
  surfaceDefault: palette.green200,
  primaryLight: palette.green400,
  primaryDefault: palette.green600,
  accent: palette.greenAccent,
  loadingBackground: palette.green500,
  navActive: palette.greenAccent,

  secondaryDark: palette.sage600,
  secondaryDefault: palette.sage400,
  secondaryLight: palette.sage200,

  textPrimary: palette.neutral900,
  textSecondary: palette.neutral700,
  textMuted: palette.neutral500,
  textDisabled: palette.neutral300,

  homeBackground: palette.greenAccent,
  homeMetricBackground: palette.neutral100,
  homeWarmAccent: palette.amber200,
  homeWarmLight: palette.amber50,
  homeWarmDark: palette.amber600,

  conditionCardBorder: palette.green200,
  conditionMetricBackground: palette.green50,
  conditionMetricBorder: palette.green100,
  conditionMetricAccent: palette.teal500,
  conditionGood: palette.greenAccent,
  conditionGoodBackground: palette.green50,
  conditionGoodBorder: palette.green200,
  conditionModerate: palette.amber200,
  conditionModerateBackground: palette.amber50,
  conditionModerateBorder: palette.amber200,
  conditionPoor: palette.red600,
  conditionPoorBackground: palette.red50,
  conditionPoorBorder: palette.red200,
} as const;

export type Colors = typeof colors;
