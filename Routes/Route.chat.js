import express from 'express';
import { createChat, getChats, deleteChat } from '../Controller/chat.controller.js';

const router = express.Router();

router.get("/", getChats);
router.post("/", createChat);
router.delete("/:id", deleteChat); 

export default router;