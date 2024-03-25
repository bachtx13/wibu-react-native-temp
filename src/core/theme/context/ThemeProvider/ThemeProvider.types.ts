import { ReactNode } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface IThemeContext {
  isDarkMode: boolean;
}
