import {
  EButtonAppearance,
  IWibuButtonProps,
  IWibuButtonStyles,
} from './WibuButton.types.ts';
import { StyleSheet, ViewStyle } from 'react-native';
import { ESize } from '../../core/assets/common/enum/size.enum.ts';
import { StyleCreator } from '../../core/theme/hooks/useCreateStyle.ts';

export const styleCreator: StyleCreator<IWibuButtonStyles, IWibuButtonProps> = (
  theme,
  props: IWibuButtonProps,
) => {
  const { Colors, Layouts } = theme;
  const { appearance, size } = props;

  const buttonAppearance: Record<EButtonAppearance, ViewStyle> = {
    [EButtonAppearance.SUCCESS]: {
      backgroundColor: Colors.success,
    },
    [EButtonAppearance.DANGER]: {
      backgroundColor: Colors.danger,
    },
    [EButtonAppearance.INFO]: {
      backgroundColor: Colors.info,
    },
    [EButtonAppearance.WARNING]: {
      backgroundColor: Colors.warning,
    },
    [EButtonAppearance.PRIMARY]: {
      backgroundColor: Colors.secondary,
    },
  };
  const buttonSize: Record<ESize, ViewStyle> = {
    [ESize.S]: {},
    [ESize.M]: {
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    [ESize.L]: {},
    [ESize.XL]: {},
  };

  return StyleSheet.create<IWibuButtonStyles>({
    button: {
      shadowColor: Colors.secondary,
      elevation: 5,
      backgroundColor: Colors.secondary,
      borderColor: Colors.primary,
      ...Layouts.dFlexCenter,
      ...buttonAppearance[appearance ?? EButtonAppearance.PRIMARY],
      ...buttonSize[size ?? ESize.M],
    },
    buttonWrapper: {
      shadowColor: Colors.disableBorder,
      elevation: 5,
    },
    text: {
      color: Colors.primary,
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500',
      ...Layouts.textCenter,
    },
    buttonDisabled: {
      backgroundColor: Colors.disable,
    },
  });
};
