import { StyleCreator } from '../../theme/hooks/useCreateStyle.ts';
import { IHomeStyles } from './Home.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator<IHomeStyles> = theme => {
  const { Colors, Layouts } = theme;
  return StyleSheet.create<IHomeStyles>({
    container: {
      ...Layouts.col,
    },
    logoutButton: {
      alignSelf: 'flex-end',
      marginTop: 10,
      marginRight: 10,
    },
    logoutButtonText: {
      ...Layouts.textEnd,
    },
    welcomeTextContainer: {
      marginTop: 200,
    },
    welcomeText: {
      color: Colors.secondary,
      fontSize: 20,
      ...Layouts.textCenter,
    },
    welcomeImage: {
      width: 200,
      height: 200,
      marginTop: 50,
      alignSelf: 'center',
    },
  });
};
