import Joi from 'joi';

import { TSignUpForm } from './form';

export const validationSchema = Joi.object<TSignUpForm>({
  name: Joi.string().messages({ 'string.empty': 'Name is required' }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': `E-mail empty isn't valid`,
      'string.email': `E-mail is required`
    }),
  description: Joi.string().max(255).min(8).messages({
    'string.empty': `Description is required`,
    'string.min': `Description must be longer than 8 digits`,
    'string.max': `Description must be less than 255 digits`
  }),
  birth_date: Joi.string().messages({
    'string.empty': `Birth date is required`
  }),
  password: Joi.string().max(16).min(3).messages({
    'string.empty': `Password is required`,
    'string.min': `Password must be longer than 3 digits`,
    'string.max': `Password must be less than 16 digits`
  }),
  confirm_password: Joi.any()
    .equal(Joi.ref('password'))
    .messages({ 'any.only': `Passwords don't match` })
});
