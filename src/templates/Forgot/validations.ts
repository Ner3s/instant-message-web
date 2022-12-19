import Joi from 'joi';

import { TSignInDTO } from '@/models/sign-in.dto';

export const validationSchema = Joi.object<TSignInDTO>({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': `E-mail empty isn't valid`,
      'string.email': `E-mail is required`
    }),
  password: Joi.string().messages({
    'string.empty': `Password is required`
  })
});
