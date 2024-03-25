import { StyleSheet } from 'react-native';
import { IAuthStyles } from './Auth.types.ts';
import { StyleCreator } from '../../theme/hooks/useCreateStyle.ts';

export const styleCreator: StyleCreator<IAuthStyles> = theme => {
  const { Colors, Layouts } = theme;
  return StyleSheet.create<IAuthStyles>({
    appName: {
      fontSize: 24,
      lineHeight: 36,
      color: Colors.secondary,
      fontWeight: '600',
      marginVertical: 100,
      ...Layouts.textCenter,
    },
    formTitle: {
      fontSize: 18,
      lineHeight: 27,
      color: Colors.secondary,
      fontWeight: '600',
      ...Layouts.textCenter,
    },
    formSubtitle: {
      fontSize: 14,
      lineHeight: 21,
      color: Colors.secondary,
      ...Layouts.textCenter,
    },
    formWrapper: {
      gap: 16,
    },
    footerNavigationLink: {
      color: Colors.textLink,
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
      ...Layouts.textEnd,
    },
    footerNavigationLinkContainer: {
      alignSelf: 'flex-end',
    },
  });
};
