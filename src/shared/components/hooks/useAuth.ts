// src/shared/hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { container } from '../../../core/auth/di/container';
import { AuthStore } from '../../../core/auth/AuthStore';

export const useAuth = () => {
  const authStore = container.resolve(AuthStore);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const subscription = authStore.isAuthenticated().subscribe(setIsAuthenticated);
    return () => subscription.unsubscribe();
  }, [authStore]);

  return {
    login: authStore.login.bind(authStore),
    logout: authStore.logout.bind(authStore),
    isAuthenticated,
  };
};
