import * as React from 'react';
import { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EApplicationScreens } from './screens.types.ts';
import { Login } from '../../screens/Auth/Login/Login.tsx';
import { Register } from '../../screens/Auth/Register/Register.tsx';
import { useTheme } from '../../theme/hooks/useTheme.ts';
import { ThemeContext } from '../../theme/context/ThemeProvider/ThemeProvider.tsx';
import { useGetUserInfoQuery } from '../../api/user/user.api.ts';
import { Home } from '../../screens/Home/Home.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.types.ts';
import { IUserState } from '../../store/user/user.types.ts';
import { IAuthState } from '../../store/auth/auth.types.ts';

const Stack = createNativeStackNavigator();
const ApplicationNavigation = () => {
  const { Colors } = useTheme();
  const { isDarkMode } = useContext(ThemeContext);
  const { refetch } = useGetUserInfoQuery(null);

  const { token } = useSelector<RootState, IAuthState>(state => state.auth);

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, [token]);
  const { isLoggedIn } = useSelector<RootState, IUserState>(
    state => state.user,
  );
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
        {!isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name={EApplicationScreens.LOGIN} component={Login} />
            <Stack.Screen
              name={EApplicationScreens.REGISTER}
              component={Register}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name={EApplicationScreens.HOME} component={Home} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigation };
