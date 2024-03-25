import * as React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { IFormLayoutProps } from './FormLayout.types.ts';
import { useCreateStyle } from '../../../../core/theme/hooks/useCreateStyle.ts';
import { styleCreator } from '../../Auth.styles.ts';
import { EAuthStatus } from '../../Auth.types.ts';
import { useApplicationNavigation } from '../../../../navigations/application/useApplicationNavigation.tsx';
import { EApplicationScreens } from '../../../../navigations/application/screens.types.ts';

const FormLayout = (props: IFormLayoutProps) => {
  const { children, status } = props;
  const styles = useCreateStyle(styleCreator, {});
  const navigation = useApplicationNavigation();
  const handleLinkPress = () => {
    navigation.navigate(
      status === EAuthStatus.LOGIN
        ? EApplicationScreens.REGISTER
        : EApplicationScreens.LOGIN,
    );
  };
  return (
    <View style={[styles.formWrapper]}>
      <View>
        <Text style={[styles.formTitle]}>
          {status === EAuthStatus.LOGIN ? 'Sign In' : 'Sign Up'}
        </Text>
        <Text style={[styles.formSubtitle]}>Enter your info</Text>
      </View>
      {children}
      <TouchableWithoutFeedback
        style={[styles.footerNavigationLinkContainer]}
        onPress={handleLinkPress}
      >
        <Text style={[styles.footerNavigationLink]}>
          {status === EAuthStatus.LOGIN ? 'Sign Up' : 'Sign In'}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export { FormLayout };
