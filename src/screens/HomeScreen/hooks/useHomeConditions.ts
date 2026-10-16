import { homeConditionsMock } from '../../../mocks/home';
import type { HomeConditionsData } from '../../../types/home';

type UseHomeConditionsResult = {
  data: HomeConditionsData;
  isLoading: boolean;
  error: Error | null;
};

export function useHomeConditions(): UseHomeConditionsResult {
  return {
    data: homeConditionsMock,
    isLoading: false,
    error: null,
  };
}
