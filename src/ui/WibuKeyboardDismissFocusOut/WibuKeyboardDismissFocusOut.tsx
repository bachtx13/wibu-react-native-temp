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
    <TouchableWithoutFeedback
      style={{
        backgroundColor: 'black',
        height: 100,
        width: 100,
      }}
      onPress={handleOnPress}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export { WibuKeyboardDismissFocusOut };
