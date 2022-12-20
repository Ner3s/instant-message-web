import Joi from 'joi';

import { ISendMessageDTO } from '@/models/send-message.dto';

export const validationSchema = Joi.object<Pick<ISendMessageDTO, 'text'>>({
  text: Joi.string().messages({
    'string.empty': `Don't send empty message`
  })
});
