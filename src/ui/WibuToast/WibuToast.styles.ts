import { StyleSheet } from 'react-native';
import { IWibuToastStyles } from '../../types/toast.types.ts';
import { StyleCreator } from '../../theme/hooks/useCreateStyle.ts';

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
