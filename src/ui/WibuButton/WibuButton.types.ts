import { ReactNode } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { ESize } from '../../assets/common/enum/size.enum.ts';

export interface IWibuButtonProps {
  children: string | ReactNode;
  containerStyle?: ViewStyle | ViewStyle[];
  buttonStyle?: ViewStyle | ViewStyle[];
  onPress: () => void;
  appearance?: EButtonAppearance;
  size?: ESize;
}

export interface IWibuButtonStyles {
  buttonWrapper: ViewStyle;
  button: ViewStyle;
  text: TextStyle;
}

export enum EButtonAppearance {
  PRIMARY = 'PRIMARY',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  DANGER = 'DANGER',
  INFO = 'INFO',
}
