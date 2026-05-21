const palette = {
  green50: '#EAF7EF',
  green100: '#D8F0DE',
  green200: '#CDEDD8',
  green400: '#8FBC8F',
  green600: '#6F8F75',
  greenAccent: '#55D683',

  sage600: '#56635B',
  sage400: '#8A968E',
  sage200: '#B8C0BA',

  neutral900: '#1F1F1F',
  neutral700: '#4A4A4A',
  neutral500: '#7A7A7A',
  neutral300: '#A6A6A6',
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

  secondaryDark: palette.sage600,
  secondaryDefault: palette.sage400,
  secondaryLight: palette.sage200,

  textPrimary: palette.neutral900,
  textSecondary: palette.neutral700,
  textMuted: palette.neutral500,
  textDisabled: palette.neutral300,
} as const;

export type Colors = typeof colors;
