import { TextStyle, ViewStyle } from 'react-native';

export interface IAuthStyles {
  appName: TextStyle;
  formTitle: TextStyle;
  formSubtitle: TextStyle;
  formWrapper: ViewStyle;
  footerNavigationLinkContainer: ViewStyle;
  footerNavigationLink: TextStyle;
}

export enum EAuthStatus {
  LOGIN = 'login',
  REGISTER = 'register',
}
