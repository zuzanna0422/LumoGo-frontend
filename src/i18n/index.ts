import { pl } from './translations/pl';

const translations = {
  pl,
} as const;

type TranslationTree = typeof pl;
type TranslationPath<T> = {
  [Key in Extract<keyof T, string>]: T[Key] extends string
    ? Key
    : T[Key] extends Record<string, unknown>
      ? `${Key}.${TranslationPath<T[Key]>}`
      : never;
}[Extract<keyof T, string>];

export type Locale = keyof typeof translations;
export type TranslationKey = TranslationPath<TranslationTree>;
export type TranslationParams = Record<string, string | number>;

let activeLocale: Locale = 'pl';

export function setLocale(locale: Locale) {
  activeLocale = locale;
}

export function t(key: TranslationKey, params?: TranslationParams) {
  let current: unknown = translations[activeLocale];

  for (const keyPart of key.split('.')) {
    if (!current || typeof current !== 'object') {
      return key;
    }

    current = (current as Record<string, unknown>)[keyPart];
  }

  if (typeof current !== 'string') {
    return key;
  }

  return current.replace(/\{\{(\w+)\}\}/g, (_, paramKey: string) => {
    const value = params?.[paramKey];
    return value === undefined ? '' : String(value);
  });
}
