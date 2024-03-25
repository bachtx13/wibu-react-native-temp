import * as React from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../../core/theme/hooks/useTheme.ts';
import { WibuTextFieldControl } from '../../../ui/WibuTextFieldControl/WibuTextFieldControl.tsx';
import { usePostRegisterMutation } from '../../../api/auth/auth.api.ts';
import { useToast } from '../../../core/hooks/useToast.tsx';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useCreateStyle } from '../../../core/theme/hooks/useCreateStyle.ts';
import { styleCreator } from '../Auth.styles.ts';
import { FormLayout } from '../components/FormLayout/FormLayout.tsx';
import { Formik } from 'formik';
import { registerSchema } from './Register.schema.ts';
import { IRegisterRequest } from '../../../api/auth/auth-dto.types.ts';
import { WibuButton } from '../../../ui/WibuButton/WibuButton.tsx';
import { WibuKeyboardDismissFocusOut } from '../../../ui/WibuKeyboardDismissFocusOut/WibuKeyboardDismissFocusOut.tsx';
import { EAuthStatus } from '../Auth.types.ts';
import { IBaseResponseObject } from '../../../api/api.types.ts';

const Register = () => {
  const { Layouts } = useTheme();
  const [postRegister, { isLoading, isSuccess, data, isError, error }] =
    usePostRegisterMutation();
  const toast = useToast();
  const styles = useCreateStyle(styleCreator, {});
  useEffect(() => {
    isSuccess &&
      !!data &&
      toast.success({
        title: data.data?.email,
        content: data.message,
      });
    if (isError && !!error) {
      const errorExtracted = (error as FetchBaseQueryError)
        .data as IBaseResponseObject;
      if (errorExtracted) {
        toast.danger({
          title: errorExtracted.errors[0].detail,
          content: errorExtracted.message,
        });
      }
    }
  }, [data, error, isError, isLoading, isSuccess, toast]);

  const handlePostRegister = async (registerData: IRegisterRequest) => {
    try {
      await postRegister(registerData).unwrap();
    } catch (err) {
      toast.danger({
        title: 'Error',
        content: 'Some error',
      });
    }
  };

  const renderFormGroup = () => {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmationPassword: '',
        }}
        validationSchema={registerSchema}
        onSubmit={handlePostRegister}
      >
        {({
          handleChange,
          errors,
          submitForm,
          handleBlur,
          values,
          touched,
          isValid,
          dirty,
          setTouched,
        }) => {
          return (
            <View style={[Layouts.col, styles.formWrapper]}>
              <WibuTextFieldControl
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={'Enter your email'}
                keyboardType={'email-address'}
                isError={touched.email && !!errors.email}
                error={errors.email}
              />
              <WibuTextFieldControl
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.email}
                secureTextEntry={true}
                isError={touched.password && !!errors.password}
                placeholder={'Enter your password'}
                error={errors.password}
              />
              <WibuTextFieldControl
                onChangeText={handleChange('confirmationPassword')}
                onBlur={handleBlur('confirmationPassword')}
                value={values.email}
                secureTextEntry={true}
                placeholder={'Re-Enter your password'}
                isError={
                  touched.confirmationPassword && !!errors.confirmationPassword
                }
                error={errors.confirmationPassword}
              />
              <WibuButton
                isDisable={!dirty || !isValid}
                onPress={async () => {
                  await submitForm();
                  dirty &&
                    isValid &&
                    (await handlePostRegister(values).then(() => {
                      setTouched({
                        email: false,
                        password: false,
                        confirmationPassword: false,
                      });
                    }));
                }}
              >
                Sign Up
              </WibuButton>
            </View>
          );
        }}
      </Formik>
    );
  };

  return (
    <WibuKeyboardDismissFocusOut>
      <View
        style={[
          Layouts.fullSize,
          Layouts.dFlex,
          Layouts.col,
          Layouts.alignItemsCenter,
        ]}
      >
        <Text style={[styles.appName]}>Wibu Reader</Text>
        <FormLayout status={EAuthStatus.REGISTER}>
          {renderFormGroup()}
        </FormLayout>
      </View>
    </WibuKeyboardDismissFocusOut>
  );
};

export { Register };
