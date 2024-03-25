import { NavigationProp } from '@react-navigation/native';

export enum EApplicationScreens {
  LOGIN = 'login',
  REGISTER = 'register',
  HOME = 'home',
}

export type ApplicationStackParamList = {
  [EApplicationScreens.LOGIN]: undefined;
  [EApplicationScreens.REGISTER]: undefined;
  [EApplicationScreens.HOME]: undefined;
};

export type ApplicationStackNavigationProps =
  NavigationProp<ApplicationStackParamList>;
