import Joi from 'joi';

import { CreateProject } from '@/models/project/create-project';

export const validationSchema = Joi.object<CreateProject>({
  name: Joi.string().messages({ 'string.empty': 'Name is required' }),
  status: Joi.boolean(),
  start_date: Joi.string().messages({ 'string.empty': 'Name is required' }),
  image_cover: Joi.string().allow(''),
  image_profile: Joi.string().allow(''),
  description: Joi.string().max(255).min(8).messages({
    'string.empty': `Description is required`,
    'string.min': `Description must be longer than 8 digits`,
    'string.max': `Description must be less than 255 digits`
  })
});
