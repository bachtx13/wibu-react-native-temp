import { NavigationProp } from '@react-navigation/native';

export enum EApplicationScreens {
  HOME = 'home',
}

export type ApplicationStackParamList = {
  [EApplicationScreens.HOME]: undefined;
};

export type ApplicationStackProps = NavigationProp<ApplicationStackParamList>;
