import * as yup from 'yup';
import { PASSWORD_TEMPLATE } from '../../../assets/common/constant/validation.constants.ts';

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email!')
    .required('Please enter your email!'),
  password: yup
    .string()
    .matches(
      PASSWORD_TEMPLATE,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    )
    .required('Please enter your password!'),
  confirmationPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords don't match.")
    .required('Please re-enter your password!'),
});
