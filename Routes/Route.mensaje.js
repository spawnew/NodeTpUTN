import { Router } from 'express';
import { getMessagesByChat, createMessage  }  from '../Controller/message.controller.js';

const router = Router();

router.get('/:chatId', getMessagesByChat);
router.post('/', createMessage);

export default router;