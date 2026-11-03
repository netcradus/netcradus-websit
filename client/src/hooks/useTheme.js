import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const toggleTheme = () => {};

  return { theme: 'dark', toggleTheme };
};
