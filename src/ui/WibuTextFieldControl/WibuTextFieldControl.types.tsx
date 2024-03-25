import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface IWibuTextFieldControlProps extends TextInputProps {
  isDisable?: boolean;
  isError?: boolean;
  error?: string;
}

export interface IWibuTextFieldControlStyles {
  container: ViewStyle;
  input: ViewStyle;
  textInput: TextStyle;
  focusInput: ViewStyle;
  errorInput: ViewStyle;
  disableInput: ViewStyle;
}
