import { homeRecommendationMock } from '../../../mocks/home';
import type { HomeRecommendationData } from '../../../types/home';

type UseHomeRecommendationResult = {
  data: HomeRecommendationData;
  isLoading: boolean;
  error: Error | null;
};

export function useHomeRecommendation(): UseHomeRecommendationResult {
  return {
    data: homeRecommendationMock,
    isLoading: false,
    error: null,
  };
}
