import { homeHeaderMock } from '../../../mocks/home';
import type { HomeHeaderData } from '../../../types/home';

type UseHomeHeaderResult = {
  data: HomeHeaderData;
  isLoading: boolean;
  error: Error | null;
};

export function useHomeHeader(): UseHomeHeaderResult {
  return {
    data: homeHeaderMock,
    isLoading: false,
    error: null,
  };
}
