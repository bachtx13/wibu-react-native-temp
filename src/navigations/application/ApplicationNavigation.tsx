import * as React from 'react';
import { Login } from '../../screens/Auth/Login/Login.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../theme/hooks/useTheme.ts';
import { useThemeContext } from '../../theme/context/ThemeProvider/ThemeProvider.tsx';
import { EApplicationScreens } from './application-screens.types.ts';

const ApplicationNavigation = () => {
  const Stack = createNativeStackNavigator();
  const { Colors } = useTheme();
  const { isDarkMode } = useThemeContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          animation: 'ios',
          contentStyle: {
            backgroundColor: Colors.primary,
          },
          statusBarColor: Colors.primary,
          statusBarStyle: isDarkMode ? 'light' : 'dark',
        })}
      >
        <Stack.Screen name={EApplicationScreens.HOME} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigation };
