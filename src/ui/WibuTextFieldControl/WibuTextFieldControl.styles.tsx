import { StyleCreator } from '../../core/theme/hooks/useCreateStyle.ts';
import {
  IWibuTextFieldControlProps,
  IWibuTextFieldControlStyles,
} from './WibuTextFieldControl.types.tsx';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator<
  IWibuTextFieldControlStyles,
  IWibuTextFieldControlProps
> = theme => {
  const { Colors } = theme;
  return StyleSheet.create<IWibuTextFieldControlStyles>({
    container: {
      width: 328,
    },
    textInput: {
      color: Colors.secondary,
    },
    input: {
      borderWidth: 1,
      borderColor: Colors.primaryBorder,
      borderRadius: 8,
      gap: 16,
      paddingVertical: 8,
      paddingHorizontal: 16,
      height: 40,
    },
    focusInput: {
      borderColor: Colors.successFocus,
    },
    errorInput: {
      borderColor: Colors.dangerFocus,
    },
    disableInput: {
      borderColor: Colors.disableBorder,
      backgroundColor: Colors.disable,
    },
  });
};
