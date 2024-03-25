import * as React from 'react';
import { Text } from 'react-native';
import { IWibuTextErrorProps } from './WibuTextError.types.tsx';
import { useCreateStyle } from '../../../../theme/hooks/useCreateStyle.ts';
import { styleCreator } from './WibuTextError.styles.tsx';

const WibuTextError = (props: IWibuTextErrorProps) => {
  const { children } = props;
  const styles = useCreateStyle(styleCreator, props);
  return <Text style={[styles.text]}>{children}</Text>;
};

export { WibuTextError };
