import * as React from 'react';
import { forwardRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import { IWibuTextFieldControlProps } from './WibuTextFieldControl.types.tsx';
import { useCreateStyle } from '../../core/theme/hooks/useCreateStyle.ts';
import { styleCreator } from './WibuTextFieldControl.styles.tsx';
import { WibuTextError } from './components/WibuTextError/WibuTextError.tsx';
import { useTheme } from '../../core/theme/hooks/useTheme.ts';

const WibuTextFieldControl = forwardRef<TextInput, IWibuTextFieldControlProps>(
  (props, ref) => {
    const {
      placeholder,
      inputMode,
      keyboardType,
      maxLength,
      defaultValue,
      blurOnSubmit,
      onBlur,
      onFocus,
      autoCapitalize,
      onSubmitEditing,
      autoFocus,
      focusable,
      isDisable,
      error,
      onChangeText,
      secureTextEntry,
      isError,
    } = props;
    const styles = useCreateStyle(styleCreator, props);
    const { Colors } = useTheme();
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const handleOnBlur = (
      event: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      setIsFocus(false);
      onBlur && onBlur(event);
    };
    const handleOnFocus = (
      event: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      setIsFocus(true);
      onFocus && onFocus(event);
    };

    return (
      <View style={[styles.container]}>
        <View>
          <TextInput
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize ?? 'none'}
            clearButtonMode={'while-editing'}
            onBlur={event => handleOnBlur(event)}
            onFocus={event => handleOnFocus(event)}
            blurOnSubmit={blurOnSubmit}
            ref={ref}
            placeholder={placeholder}
            placeholderTextColor={Colors.primaryTextPlaceholder}
            inputMode={inputMode}
            keyboardType={keyboardType}
            maxLength={maxLength}
            defaultValue={defaultValue}
            onSubmitEditing={onSubmitEditing}
            focusable={focusable && !isDisable}
            autoFocus={autoFocus}
            editable={!isDisable}
            cursorColor={Colors.primaryTextPlaceholder}
            style={[
              styles.textInput,
              styles.input,
              isFocus && styles.focusInput,
              isError && styles.errorInput,
              isDisable && styles.disableInput,
            ]}
          />
        </View>
        {isError && !!error && <WibuTextError>{error}</WibuTextError>}
      </View>
    );
  },
);

export { WibuTextFieldControl };
