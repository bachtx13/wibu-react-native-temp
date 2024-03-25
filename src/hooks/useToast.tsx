import Toast from 'react-native-toast-message';
import {
  EToastType,
  IWibuToastProps,
  WibuToastApi,
} from '../types/toast.types.ts';
import { useCreateStyle } from '../theme/hooks/useCreateStyle.ts';
import { styleCreator } from '../ui/WibuToast/WibuToast.styles.ts';

const useToast = (): WibuToastApi => {
  const styles = useCreateStyle(styleCreator, {});
  return {
    [EToastType.INFO]: (props: IWibuToastProps) => {
      const { content, title, titleStyle, contentStyle } = props;
      Toast.show({
        type: 'info',
        ...props,
        text1: title,
        text2: content,
        text1Style: [styles.infoTitle, titleStyle],
        text2Style: [styles.infoContent, contentStyle],
      });
    },
    [EToastType.DANGER]: (props: IWibuToastProps) => {
      const { content, title, titleStyle, contentStyle } = props;
      Toast.show({
        type: 'error',
        ...props,
        text1: title,
        text2: content,
        text1Style: [styles.dangerTitle, titleStyle],
        text2Style: [styles.dangerContent, contentStyle],
      });
    },
    [EToastType.SUCCESS]: (props: IWibuToastProps) => {
      const { content, title, titleStyle, contentStyle } = props;
      Toast.show({
        type: 'success',
        ...props,
        text1: title,
        text2: content,
        text1Style: [styles.successTitle, titleStyle],
        text2Style: [styles.successContent, contentStyle],
      });
    },
    [EToastType.WARNING]: (props: IWibuToastProps) => {
      const { content, title, titleStyle, contentStyle } = props;
      Toast.show({
        type: 'info',
        ...props,
        text1: title,
        text2: content,
        text1Style: [styles.warningTitle, titleStyle],
        text2Style: [styles.warningContent, contentStyle],
      });
    },
  };
};

export { useToast };
