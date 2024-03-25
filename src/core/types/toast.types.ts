import { TextStyle } from 'react-native';

export interface IToastApi {
  info: () => void;
  error: () => void;
  danger: () => void;
  success: () => void;
}

export type WibuToastApi = Record<EToastType, (props: IWibuToastProps) => void>;

export enum EToastType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

export interface IWibuToastProps {
  type?: EToastType;
  title?: string;
  titleStyle?: TextStyle;
  content?: string;
  contentStyle?: TextStyle;
  visibilityTime?: number;
  autoHide?: boolean;
  onShow?: () => void;
  onHide?: () => void;
  onPress?: () => void;
  props?: any;
}

export interface IWibuToastStyle {
  title: TextStyle;
  content: TextStyle;
}

export type IWibuToastStyles = {
  infoTitle: TextStyle;
  infoContent: TextStyle;
  dangerTitle: TextStyle;
  dangerContent: TextStyle;
  warningTitle: TextStyle;
  warningContent: TextStyle;
  successTitle: TextStyle;
  successContent: TextStyle;
};
