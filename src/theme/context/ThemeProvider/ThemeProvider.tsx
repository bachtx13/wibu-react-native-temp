import * as React from 'react';
import { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { IThemeContext, ThemeProviderProps } from './ThemeProvider.types.ts';

const ThemeContext = createContext<IThemeContext>({
  isDarkMode: false,
});

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const colorScheme = useColorScheme();
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode: colorScheme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, ThemeContext };
