export type HomeHeaderData = {
  user: {
    firstName: string;
    avatarUrl: string | null;
    initials: string | null;
  };
  location: {
    city: string;
    region: string;
  };
};

export type HomeRecommendationTextPart = {
  text: string;
  emphasized?: boolean;
};

export type HomeRecommendationData = {
  assistantName: string;
  messageParts: HomeRecommendationTextPart[];
};
