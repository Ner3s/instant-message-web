import Joi from 'joi';

import { TProfileEditForm } from './form';

export const validationSchema = Joi.object<TProfileEditForm>({
  name: Joi.string().messages({ 'string.empty': 'Name is required' }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': `E-mail empty isn't valid`,
      'string.email': `E-mail is required`
    }),
  image_url: Joi.string().allow(''),
  description: Joi.string().max(255).min(8).messages({
    'string.empty': `Description is required`,
    'string.min': `Description must be longer than 8 digits`,
    'string.max': `Description must be less than 255 digits`
  }),
  birth_date: Joi.string().messages({
    'string.empty': `Birth date is required`
  })
});
