import { StyleSheet } from 'react-native';
import { IWibuTextErrorStyles } from './WibuTextError.types.tsx';
import { StyleCreator } from '../../../../theme/hooks/useCreateStyle.ts';

export const styleCreator: StyleCreator<IWibuTextErrorStyles> = theme => {
  const { Colors } = theme;
  return StyleSheet.create<IWibuTextErrorStyles>({
    text: {
      color: Colors.danger,
      fontSize: 12,
      lineHeight: 16,
    },
  });
};
