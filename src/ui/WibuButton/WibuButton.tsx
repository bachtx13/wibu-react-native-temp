import * as React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { EButtonAppearance, IWibuButtonProps } from './WibuButton.types.ts';
import { isString } from '../../util/type-util.ts';
import { useCreateStyle } from '../../theme/hooks/useCreateStyle.ts';
import { styleCreator } from './WibuButton.styles.ts';
import { Palette } from '../../assets/common/constant/color.constants.ts';
import { useTheme } from '../../theme/hooks/useTheme.ts';

const WibuButton = (props: IWibuButtonProps) => {
  const { appearance, onPress, buttonStyle, containerStyle, children } = props;
  const { Colors } = useTheme();
  const underlayColors: Record<EButtonAppearance, string> = {
    [EButtonAppearance.INFO]: Palette.blue2,
    [EButtonAppearance.DANGER]: Palette.red1,
    [EButtonAppearance.WARNING]: Colors.warningFocus,
    [EButtonAppearance.SUCCESS]: Palette.green1,
    [EButtonAppearance.PRIMARY]: Colors.primaryFocus,
  };
  const styles = useCreateStyle(styleCreator, props);
  return (
    <View style={[styles.buttonWrapper, containerStyle]}>
      <TouchableHighlight
        style={[styles.button, buttonStyle]}
        onPress={onPress ?? (() => {})}
        underlayColor={underlayColors[appearance ?? EButtonAppearance.PRIMARY]}
      >
        {isString(children) ? (
          <Text style={[styles.text]}>{children}</Text>
        ) : (
          children
        )}
      </TouchableHighlight>
    </View>
  );
};

export { WibuButton };