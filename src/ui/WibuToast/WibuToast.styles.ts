import { StyleSheet } from 'react-native';
import { IWibuToastStyles } from '../../core/types/toast.types.ts';
import { StyleCreator } from '../../core/theme/hooks/useCreateStyle.ts';

export const styleCreator: StyleCreator<IWibuToastStyles> = () => {
  return StyleSheet.create<IWibuToastStyles>({
    infoTitle: {},
    infoContent: {},
    dangerTitle: {},
    dangerContent: {},
    warningTitle: {},
    warningContent: {},
    successTitle: {},
    successContent: {},
  });
};
