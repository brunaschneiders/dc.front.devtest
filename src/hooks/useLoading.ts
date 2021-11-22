import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../contexts/AppContext';

export const useLoading = () => {
  const isLoading = useContextSelector(AppContext, (app) => app.isLoading);

  return {
    isLoading
  };
};
