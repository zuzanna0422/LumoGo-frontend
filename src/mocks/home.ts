import type { HomeHeaderData, HomeRecommendationData } from '../types/home';

export const homeHeaderMock: HomeHeaderData = {
  user: {
    firstName: 'Kasia',
    avatarUrl: null,
    initials: null,
  },
  location: {
    city: 'Kraków',
    region: 'Małopolska',
  },
};

export const homeRecommendationMock: HomeRecommendationData = {
  assistantName: 'Lumo',
  messageParts: [
    { text: 'Dzisiaj po południu masz ' },
    { text: 'idealne warunki', emphasized: true },
    { text: ' na spacer z Tosią ☀️\nJakość powietrza super, temp. przyjemna - nie przegap!' },
  ],
};
