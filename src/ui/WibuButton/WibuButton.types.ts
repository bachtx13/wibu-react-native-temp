import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ESize } from '../../assets/common/enum/size.enum.ts';

export interface IWibuButtonProps {
  children: string | ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  appearance?: EButtonAppearance;
  size?: ESize;
  isDisable?: boolean;
}

export interface IWibuButtonStyles {
  buttonWrapper: ViewStyle;
  button: ViewStyle;
  buttonDisabled: ViewStyle;
  text: TextStyle;
}

export enum EButtonAppearance {
  PRIMARY = 'PRIMARY',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  DANGER = 'DANGER',
  INFO = 'INFO',
}
