import * as React from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../../theme/hooks/useTheme.ts';
import { WibuTextFieldControl } from '../../../ui/WibuTextFieldControl/WibuTextFieldControl.tsx';
import { usePostLoginMutation } from '../../../api/auth/auth.api.ts';
import { useToast } from '../../../hooks/useToast.tsx';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useCreateStyle } from '../../../theme/hooks/useCreateStyle.ts';
import { styleCreator } from '../Auth.styles.ts';
import { FormLayout } from '../components/FormLayout/FormLayout.tsx';
import { Formik } from 'formik';
import { ILoginRequest } from '../../../api/auth/auth-dto.types.ts';
import { WibuButton } from '../../../ui/WibuButton/WibuButton.tsx';
import { WibuKeyboardDismissFocusOut } from '../../../ui/WibuKeyboardDismissFocusOut/WibuKeyboardDismissFocusOut.tsx';
import { EAuthStatus } from '../Auth.types.ts';
import { loginSchema } from './Login.schema.ts';
import { useDispatch } from 'react-redux';
import { updateToken } from '../../../store/auth/auth.slice.ts';
import { IBaseResponseObject } from '../../../api/api.types.ts';

const Login = () => {
  const { Layouts } = useTheme();
  const [postLogin, { isSuccess, data, isError, error }] =
    usePostLoginMutation();
  const dispatch = useDispatch();
  const toast = useToast();
  const styles = useCreateStyle(styleCreator, {});
  useEffect(() => {
    if (isSuccess && !!data && !!data.data) {
      toast.success({
        title: data.data?.email,
        content: data.message,
      });
      dispatch(updateToken(data.data.token));
    }

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
  }, [data, error, isError, isSuccess]);
  const handlePostLogin = async (loginRequest: ILoginRequest) => {
    try {
      await postLogin(loginRequest).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  const renderFormGroup = () => {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handlePostLogin}
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
              <WibuButton
                onPress={async () => {
                  await submitForm();
                  dirty &&
                    isValid &&
                    (await handlePostLogin(values).then(() => {
                      setTouched({
                        email: false,
                        password: false,
                      });
                    }));
                }}
              >
                Sign In
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
        <FormLayout status={EAuthStatus.LOGIN}>{renderFormGroup()}</FormLayout>
      </View>
    </WibuKeyboardDismissFocusOut>
  );
};

export { Login };
