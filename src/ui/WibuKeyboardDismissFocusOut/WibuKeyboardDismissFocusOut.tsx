import * as React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { IWibuKeyboardDismissFocusOutProps } from './WibuKeyboardDismissFocusOut.types.ts';

const WibuKeyboardDismissFocusOut = (
  props: IWibuKeyboardDismissFocusOutProps,
) => {
  const { children } = props;
  const handleOnPress = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export { WibuKeyboardDismissFocusOut };
